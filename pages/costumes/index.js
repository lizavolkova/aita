import { Layout } from "../../components/Layout";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { SliceZone } from "@prismicio/react";
import { CostumePreviewComponent } from "../../components/CostumePreview";
import { ImageGalleryAnimated } from "../../components/ImageGalleryAnimated";
import { XBlock } from "react-xmasonry";

import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { pageSchema } from "../../utils/schemas/page";

function Costumes({ page, costumes, navigation, settings, tags }) {
  const [selectedTags, setSelectedTags] = useState(tags);
  const [selectedCostumes, setSelectedCostumes] = useState(costumes);
  const [filtered, setFiltered] = useState(false);

  const onTagClick = (tag) => {
    setSelectedTags(tag);
    setSelectedCostumes(
      costumes.filter((costume) => costume.tags.includes(tag))
    );
    setFiltered(true);
  };

  const showAll = () => {
    setSelectedTags(tags);
    setSelectedCostumes(costumes);
    setFiltered(false);
  };

  const schema = pageSchema(page);
  console.log(schema);

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
      metaTitle={prismicH.asText(page.data.meta_title)}
      metaDescription={prismicH.asText(page.data.meta_description)}
      metaImage={prismicH.asImageSrc(page.data.meta_image_16x9)}
      schema={schema}
    >
      <div>
        <div className="pb-10 text-center">
          <PrismicRichText field={page.data.title} />
          {page.data.slices && (
            <SliceZone slices={page.data.slices} components={components} />
          )}
        </div>
        <div className="flex justify-center pl-4 text-xs font-bold uppercase">
          <span
            className={`${
              filtered ? "text-black" : "text-main-color"
            } cursor-pointer pr-4`}
            onClick={showAll}
          >
            Show All
          </span>
          {tags.map((tag) => (
            <span
              className={`${
                selectedTags.includes(tag) && filtered
                  ? "text-main-color"
                  : "text-black"
              } cursor-pointer pr-4`}
              onClick={() => onTagClick(tag)}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <ImageGalleryAnimated>
          {selectedCostumes.map((costume) => {
            return (
              <XBlock key={costume.id} width={1}>
                <CostumePreviewComponent {...costume} key={costume.id} />
              </XBlock>
            );
          })}
        </ImageGalleryAnimated>
      </div>
    </Layout>
  );
}

export default Costumes;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "costumes");

  const costumes = await client.getAllByType("costume", {
    orderings: [{ field: "my.costume.year", direction: "desc" }],
  });
  const allTags = costumes.map((costume) => costume.tags).flat();
  const tags = [...new Set(allTags)];

  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      costumes,
      navigation,
      settings,
      tags,
    },
  };
}
