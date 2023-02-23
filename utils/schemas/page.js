import * as prismicH from "@prismicio/helpers";

export const pageSchema = (page) => {
  /** @type {import('schema-dts').WebSite} */
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: `https://www.adventuresintimeart.com${page.url}`,
    name: prismicH.asText(page.data.title),
    author: {
      "@type": "Person",
      name: "Liza Volkova",
    },
    image: [
      prismicH.asImageSrc(page.data.meta_image_1x1),
      prismicH.asImageSrc(page.data.meta_image_4x3),
      prismicH.asImageSrc(page.data.meta_image_16x9),
    ],
    description: prismicH.asText(page.data.meta_description),
    datePublished: page.first_publication_date,
    dateModified: page.last_publication_date,
  };
};
