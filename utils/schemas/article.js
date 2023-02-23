import * as prismicH from "@prismicio/helpers";

export const articleSchema = (article) => {
  /** @type {import('schema-dts').Article} */
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: prismicH.asText(article.data.title),
    author: {
      "@type": "Person",
      name: "Liza Volkova",
    },
    image: [
      prismicH.asImageSrc(article.data.meta_image_1x1),
      prismicH.asImageSrc(article.data.meta_image_4x3),
      prismicH.asImageSrc(article.data.meta_image_16x9),
    ],
    description: prismicH.asText(article.data.meta_description),
    datePublished: article.first_publication_date,
    dateModified: article.last_publication_date,
  };
};
