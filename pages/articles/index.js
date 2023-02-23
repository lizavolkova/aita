import React from "react";
import { Layout } from "../../components/Layout";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { ArticlePreviewCard } from "../../components/ArticlePreviewCard";
import { pageSchema } from "../../utils/schemas/page";

function Articles({ page, articles, navigation, settings }) {
  const schema = pageSchema(page);

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
        <div className="grid grid-cols-2 gap-16">
          {articles.map((article) => {
            return <ArticlePreviewCard article={article} key={article.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Articles;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("page", "articles");
  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      articles,
      navigation,
      settings,
    },
  };
}
