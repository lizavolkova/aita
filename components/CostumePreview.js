// https://maribel.qodeinteractive.com/portfolio-item/design-news-weekly/

// http://preview.themeforest.net/item/mountain-the-minimal-portfolio-theme-for-inspiration/full_screen_preview/12447457?_ga=2.133246537.676646449.1674778444-606654686.1642022954&_gac=1.87904362.1674841081.Cj0KCQiAic6eBhCoARIsANlox84pKjnOBrOBGv_F5Vmo1WAmCR-_Y_QYrpOubarXrBq85CJ4YKeZdOkaAtZ0EALw_wcB
import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const CostumePreviewComponent = ({ data, url, tags}) => {
  const { title, sub_title, year, featured_image  } = data;
  return (
    <>
      <PrismicLink href={url}>
        <div className="group relative m-2 lg:m-4 text-slate-700">
          <PrismicNextImage
            field={featured_image}
            className="block h-auto w-full "
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black opacity-50 lg:opacity-0 duration-300 ease-in group-hover:opacity-60"></div>
          <div className="absolute inset-0 h-full w-full text-center ">
            <div className="relative z-10 inline-block flex h-full flex-col items-center justify-end pb-2 bottom-0 lg:-bottom-1/4 text-center text-white opacity-100 lg:opacity-0 duration-100 ease-in-out group-hover:opacity-100 group-hover:bottom-0 group-hover:visible">
              <h4 className="uppercase">
                <PrismicText field={title} />
              </h4>
              <p className="text-sm text-slate-300 uppercase">
                <PrismicText field={sub_title} />
              </p>
            </div>
          </div>
        </div>
      </PrismicLink>
    </>
  );
};
