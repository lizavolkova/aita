import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";

const Page = ({ page, navigation, settings }) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
      metaTitle={`${prismicH.asText(page.data.title)} |  ${prismicH.asText(
        settings.data.name
      )}`}
    >
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, {
    fetchLinks: ["costume.title", "costume.sub_title", "costume.preview_image"],
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

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages
      .map((page) => prismicH.asLink(page))
      .filter((page) => page !== "/costumes" && page !== "/articles"),
    fallback: false,
  };
}
