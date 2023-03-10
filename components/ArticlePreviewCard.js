import { PrismicText, PrismicLink } from "@prismicio/react";
import { ImageLoader } from "./ImageLoader";

export const ArticlePreviewCard = ({ article }) => {
  const { preview_image, title, sub_title } = article.data;

  return (
    <>
      <PrismicLink href={article.url}>
        {preview_image && (
          <ImageLoader img={preview_image} classes="block h-auto w-full " />
        )}
        <h6 className="text-center">
          <PrismicText field={title} />
        </h6>
        <p className="text-center text-sm uppercase text-slate-400">
          <PrismicText field={sub_title} />
        </p>
      </PrismicLink>
    </>
  );
};
