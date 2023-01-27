import Head from "next/head";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { HorizontalDivider } from "../../components/HorizontalDivider";
import {CostumeDetailsComponent} from "../../components/CostumeDetails";
import React from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const Article = ({ costume, latestCostume, navigation, settings }) => {
  const date = prismicH.asDate(
      costume.data.publishDate || costume.first_publication_date
  );

  return (
      <Layout
          withHeaderDivider={false}
          navigation={navigation}
          settings={settings}
      >
        <Head>
          <title>

          </title>
        </Head>
        <Bounded size="widest">
          <CostumeDetailsComponent {...costume.data} />
          <SliceZone slices={costume.data.slices} components={components} />
        </Bounded>
    </Layout>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const costume = await client.getByUID("costume", params.uid);

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
