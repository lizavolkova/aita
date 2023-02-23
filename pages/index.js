import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { components } from "../slices";
import { pageSchema } from "../utils/schemas/page";
import React from "react";

const Index = ({ page, navigation, settings }) => {
  const schema = pageSchema(page);

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
      fullWidth={true}
      metaTitle={prismicH.asText(page.data.meta_title)}
      metaDescription={prismicH.asText(page.data.meta_description)}
      metaImage={prismicH.asImageSrc(page.data.meta_image_16x9)}
      schema={schema}
    >
      <section>
        <SliceZone slices={page.data.slices} components={components} />
      </section>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", {
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
