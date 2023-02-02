import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const ArticlePreviewCard = ({ costume }) => {
  const { preview_image, title, sub_title } = costume.data;

  return (
    <>
      <PrismicLink href={costume.url}>
        <PrismicNextImage
          field={preview_image}
          className="block h-auto w-full"
        />
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