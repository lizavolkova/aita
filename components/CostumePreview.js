// https://maribel.qodeinteractive.com/portfolio-item/design-news-weekly/

// http://preview.themeforest.net/item/mountain-the-minimal-portfolio-theme-for-inspiration/full_screen_preview/12447457?_ga=2.133246537.676646449.1674778444-606654686.1642022954&_gac=1.87904362.1674841081.Cj0KCQiAic6eBhCoARIsANlox84pKjnOBrOBGv_F5Vmo1WAmCR-_Y_QYrpOubarXrBq85CJ4YKeZdOkaAtZ0EALw_wcB
import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const CostumePreviewComponent = ({ data, url }) => {
  const { title, sub_title, year, featured_image } = data;

  return (
    <>
      <PrismicLink href={url}>
        <div className="group relative m-4 text-slate-700">
          <PrismicNextImage
            field={featured_image}
            className="block h-auto w-full "
          />
          <div className="absolute inset-0 h-full w-full bg-black opacity-0 duration-300 ease-in-out group-hover:opacity-60"></div>
          <div className="absolute inset-0 h-full w-full text-center ">
            <div className="relative z-10 inline-block flex h-full flex-col items-center justify-center text-center align-middle text-white opacity-0 duration-100 ease-in-out group-hover:opacity-100">
              <h2 className="text-lg">
                <PrismicText field={title} />
              </h2>
              <p className="text-sm text-slate-300">
                <PrismicText field={sub_title} />
              </p>
            </div>
          </div>
        </div>
      </PrismicLink>
    </>
  );
};
