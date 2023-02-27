import React from "react";
import linkResolver from '../utils/linkResolver';
import { createClient } from "../prismicio";
import { renderToStaticMarkup } from "react-dom/server";

const SitemapIndex = () => null;

const Sitemap = ({ pages }) => {
    const origin = 'https://www.adventuresintimeart.com';

    return (
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            {pages?.map((page, index) => {
                const lastModified = new Date(page.last_publication_date).toISOString();

                // special rule for the Homepage
                if (
                    linkResolver(page) === "/" &&
                    page.type === "page" &&
                    page.uid === "home"
                ) {
                    return (
                        <url key={index}>
                            <loc>{origin}/</loc>
                            <lastmod>{lastModified}</lastmod>
                        </url>
                    );
                }

                if (
                    (linkResolver(page) !== "/" || page.url) &&
                    !(page.data.seoIndex === false)
                ) {
                    const url = origin + (linkResolver(page) || page.url);

                    return (
                        <url key={index}>
                            <loc>{url}</loc>
                            <lastmod>{lastModified}</lastmod>
                        </url>
                    );
                }
            })}
        </urlset>
    );
};

export const getServerSideProps = async ({ res }) => {
    const pages = await createClient().dangerouslyGetAll();

    res.setHeader("Content-Type", "text/xml");
    res.write(renderToStaticMarkup(<Sitemap pages={pages} />));
    res.end();

    return {
        props: {},
    };
};

export default SitemapIndex;