import { Layout } from "../../components/Layout";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { ArticlePreviewCard } from "../../components/ArticlePreviewCard";

function Articles({ articles, navigation, settings }) {
  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
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
      articles,
      navigation,
      settings,
    },
  };
}
