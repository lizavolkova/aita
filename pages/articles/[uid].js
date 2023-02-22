import { PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { PrismicNextImage } from "@prismicio/next";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Article = ({ article, navigation, settings }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  /** @type {import('schema-dts').Article} */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: prismicH.asText(article.data.title),
    author: {
      '@type': 'Person',
      name: 'Liza Volkova'
    },
    image: [
      prismicH.asImageSrc(article.data.meta_image_1x1),
      prismicH.asImageSrc(article.data.meta_image_4x3),
      prismicH.asImageSrc(article.data.meta_image_16x9)
    ],
    description: prismicH.asText(article.data.meta_description),
    datePublished: article.data.publication_date,
    dateModified: article.last_publication_date,
  }

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
      metaTitle={`${prismicH.asText(article.data.title)} |  ${prismicH.asText(settings.data.name)}`}
      schema={schema}
    >
      <article>
        <h2>
          <PrismicText field={article.data.title} />
        </h2>
        <span className="sub-title">
          <PrismicText field={article.data.sub_title} />
        </span>
        <p className="mb-5 font-serif italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        <PrismicNextImage
          field={article.data.preview_image}
          className="mb-10 block h-auto max-h-[300px] w-full object-cover object-top"
        />
        <SliceZone slices={article.data.slices} components={components} />
      </article>
    </Layout>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const latestArticles = await client.getAllByType("article", {
    fetchLinks: 'article.author',
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      article,
      latestArticles,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
