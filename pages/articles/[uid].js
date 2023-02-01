import Head from "next/head";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { HorizontalDivider } from "../../components/HorizontalDivider";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Article = ({ article, latestArticles, navigation, settings }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(article.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      <article>
          <h2><PrismicText field={article.data.title} /></h2>
          <span className="sub-title"><PrismicText field={article.data.sub_title} /></span>
          <p className="font-serif italic tracking-tighter text-slate-500 mb-5">
            {dateFormatter.format(date)}
          </p>
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
