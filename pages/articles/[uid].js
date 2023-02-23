import { PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { PrismicNextImage } from "@prismicio/next";
import { articleSchema } from "../../utils/schemas/article";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Article = ({ article, navigation, settings }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const schema = articleSchema(article);

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
      metaTitle={`${prismicH.asText(article.data.title)} |  ${prismicH.asText(
        settings.data.name
      )}`}
      metaDescription={prismicH.asText(article.data.meta_description)}
      metaImage={prismicH.asImageSrc(article.data.meta_image_16x9)}
      schema={schema}
      type="article"
    >
      <article>
        <h1>
          <PrismicText field={article.data.title} />
        </h1>
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
    fetchLinks: "article.author",
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
