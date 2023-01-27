import { Layout } from "../components/Layout";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../components/Bounded";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import { CostumePreviewComponent } from "../components/CostumePreview";
import { ImageGalleryComponent } from "../components/ImageGallery";
import CostumeDetails from "../slices/CostumeDetails";

const Costumes = ({ page, costumes, navigation, settings, tags }) => {
  const filterImages = () => {

  }

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <Bounded size="widest">
        <SliceZone slices={page.data.slices} components={components} />

        <div className="flex uppercase text-sm font-bold">
          <span className="pr-4 cursor-pointer">Show All</span>
          {tags.map(tag => <span className="pr-4 cursor-pointer" key={tag}>{tag}</span>)}
        </div>

        <ImageGalleryComponent>
          {costumes.map((costume) => {
            return <CostumePreviewComponent {...costume} key={costume.id} />;
          })}
        </ImageGalleryComponent>
      </Bounded>
    </Layout>
  );
};

export default Costumes;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "costumes");

  const costumes = await client.getAllByType("costume", {
    orderings: [{ field: "my.costume.year", direction: "desc" }],
  });
  const allTags = costumes.map(costume => costume.tags).flat();
  const tags = [...new Set(allTags)];
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      costumes,
      navigation,
      settings,
      tags
    },
  };
}
