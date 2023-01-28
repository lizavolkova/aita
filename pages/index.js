import Head from "next/head";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Bounded } from "../components/Bounded";
import { Heading } from "../components/Heading";
import { components } from "../slices";

const Index = ({ page, navigation, settings }) => {

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
      fullWidth={true}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
        <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", {
    fetchLinks: ['costume.title', 'costume.sub_title', 'costume.preview_image']
  });

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
