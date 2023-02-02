import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";
import { CostumeDetailsComponent } from "../../components/CostumeDetails";
import React from "react";

const Article = ({ costume, navigation, settings }) => {
  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title></title>
      </Head>
        <CostumeDetailsComponent {...costume.data} />
    </Layout>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const costume = await client.getByUID("costume", params.uid, {
    fetchLinks: ['costume.title', 'costume.sub_title', 'costume.featured_image', 'article.title', 'article.sub_title', 'article.preview_image']
  });

  const latestCostume = await client.getAllByType("costume", {
    limit: 3,
    orderings: [
      { field: "my.costume.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      costume,
      latestCostume,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const costumes = await client.getAllByType("costume");

  return {
    paths: costumes.map((costume) => prismicH.asLink(costume)),
    fallback: false,
  };
}
