import { Layout } from "../../components/Layout";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { SliceZone } from "@prismicio/react";
import { CostumePreviewComponent } from "../../components/CostumePreview";
import { ImageGalleryAnimated } from "../../components/ImageGalleryAnimated";
import { XBlock } from "react-xmasonry";
import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import React, { useState } from "react";


const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});

const findFirstImage = (slices) => {
    const imageSlice = slices.find((slice) => slice.slice_type === "image");

    if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
        return imageSlice.primary.image;
    }
};

const getExcerpt = (slices) => {
    const text = slices
        .filter((slice) => slice.slice_type === "text")
        .map((slice) => prismicH.asText(slice.primary.text))
        .join(" ");

    const excerpt = text.substring(0, 300);

    if (text.length > 300) {
        return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
    } else {
        return excerpt;
    }
};

const Article = ({ article }) => {
    const featuredImage =
        (prismicH.isFilled.image(article.data.featuredImage) &&
            article.data.featuredImage) ||
        findFirstImage(article.data.slices);
    const date = prismicH.asDate(
        article.data.publishDate || article.first_publication_date
    );
    const excerpt = getExcerpt(article.data.slices);
    console.log(article)

    return (
        <li className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
            <PrismicLink document={article} tabIndex="-1">
                <div className="aspect-w-4 aspect-h-3 relative bg-gray-100">
                    {prismicH.isFilled.image(featuredImage) && (
                        <PrismicNextImage
                            field={article.data.preview_image}
                            fill={true}
                            className="object-cover"
                        />
                    )}
                </div>
            </PrismicLink>
            <div className="grid grid-cols-1 gap-3 md:col-span-2">
                <h2>
                    <PrismicLink document={article}>
                        <PrismicText field={article.data.title} />
                    </PrismicLink>
                </h2>
                <p className="font-serif italic tracking-tighter text-slate-500">
                    {dateFormatter.format(date)}
                </p>
                {excerpt && (
                    <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
                        {excerpt}
                    </p>
                )}
            </div>
        </li>
    );
};

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
                <ul className="grid grid-cols-1 gap-16">
                    {articles.map((article) => (
                        <Article key={article.id} article={article} />
                    ))}
                </ul>
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