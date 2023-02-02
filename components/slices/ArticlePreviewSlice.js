import React from "react";
import { HomeSection } from "../../components/HomeSection";
import { ArticlePreviewCard } from "../ArticlePreviewCard";

/**
 * @typedef {import("@prismicio/client").Content.LatestCostumesSlice} LatestCostumesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LatestCostumesSlice>} LatestCostumesProps
 * @param { LatestCostumesProps }
 */
const ArticlePreviewSlice = ({ slice }) => {
    return (
        <HomeSection
            title={slice.primary.title}
            bgColor="bg-gray-100"
            fullWidth={true}
        >
            <div className="container mx-auto flex flex-col px-2 md:flex-row">
                {slice.items.map((item, i) => {
                    return (
                        <div className="w-full bg-white p-5 md:m-4 md:w-1/3" key={i}>
                            {item.article.uid && <ArticlePreviewCard costume={item.article} />}
                            {item.costume.uid && <ArticlePreviewCard costume={item.costume} />}
                        </div>
                    );
                })}
            </div>
        </HomeSection>
    );
};

export default ArticlePreviewSlice;