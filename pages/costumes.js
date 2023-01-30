import { Layout } from "../components/Layout";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { Bounded } from "../components/Bounded";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import { CostumePreviewComponent } from "../components/CostumePreview";
import { ImageGalleryComponent } from "../components/ImageGallery";
import React, { useState } from 'react';

function Costumes({ page, costumes, navigation, settings, tags }) {
  const [selectedTags, setSelectedTags] = useState(tags);
  const [selectedCostumes, setSelectedCostumes] = useState(costumes);
  const [filtered, setFiltered] = useState(false);

  const onTagClick = (tag) => {
    setSelectedTags(tag)
    setSelectedCostumes(costumes.filter(costume => costume.tags.includes(tag)));
    setFiltered(true)
  }

  const showAll = () => {
    setSelectedTags(tags);
    setSelectedCostumes(costumes);
    setFiltered(false)
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
      <div >
        {!page.data.slices && <SliceZone slices={page.data.slices} components={components} />}

        <div className="flex uppercase text-sm font-bold pl-4">
          <span className={`${filtered ? 'text-black' : 'text-main-color'} pr-4 cursor-pointer`} onClick={showAll}>Show All</span>
          {tags.map(tag => <span className={`${selectedTags.includes(tag) && filtered ? 'text-main-color' : 'text-black'} pr-4 cursor-pointer`} onClick={() => onTagClick(tag)} key={tag}>{tag}</span>)}
        </div>

        <ImageGalleryComponent>
          {selectedCostumes.map((costume) => {
            return <CostumePreviewComponent {...costume} key={costume.id} />;
          })}
        </ImageGalleryComponent>
      </div>
    </Layout>
  );
};

export default Costumes;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "costumes");

  const costumes = await client.getAllByType("costume", {
    orderings: [{ field: "my.costume.year", direction: "desc" }]
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
