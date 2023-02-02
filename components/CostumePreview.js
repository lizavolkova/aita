import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const CostumePreviewComponent = ({ data, url }) => {
  const { title, sub_title, featured_image } = data;
  return (
    <div className="m-2 lg:m-4">
      <PrismicLink href={url}>
        <div className="group relative  text-slate-700">
          <PrismicNextImage
            field={featured_image}
            className=""
            imgixParams={{
              height: 1200,
            }}
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black opacity-50 duration-300 ease-in group-hover:opacity-60 lg:opacity-0"></div>
          <div className="absolute inset-0 h-full w-full text-center ">
            <div className="relative bottom-0 z-10 inline-block flex h-full flex-col items-center justify-end pb-2 text-center text-white opacity-100 duration-100 ease-in-out group-hover:visible group-hover:bottom-0 group-hover:opacity-100 lg:-bottom-1/4 lg:opacity-0">
              <h6>
                <PrismicText field={title} />
              </h6>
              <p className="text-sm uppercase text-slate-300">
                <PrismicText field={sub_title} />
              </p>
            </div>
          </div>
        </div>
      </PrismicLink>
    </div>
  );
};
