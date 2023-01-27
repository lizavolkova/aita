// https://maribel.qodeinteractive.com/portfolio-item/design-news-weekly/

// http://preview.themeforest.net/item/mountain-the-minimal-portfolio-theme-for-inspiration/full_screen_preview/12447457?_ga=2.133246537.676646449.1674778444-606654686.1642022954&_gac=1.87904362.1674841081.Cj0KCQiAic6eBhCoARIsANlox84pKjnOBrOBGv_F5Vmo1WAmCR-_Y_QYrpOubarXrBq85CJ4YKeZdOkaAtZ0EALw_wcB
import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next'

export const CostumePreviewComponent = ({data, url} ) => {
    const { title, sub_title, year, featured_image } = data;

    return (
        <>
            <PrismicLink href={url} >
                <div className="text-slate-700 m-4 relative group">
                    <PrismicNextImage field={featured_image} className="block w-full h-auto " />
                    <div className="absolute h-full w-full bg-black inset-0 opacity-0 group-hover:opacity-60 ease-in-out duration-300"></div>
                    <div className="absolute h-full w-full inset-0 text-center ">
                        <div className="z-10 inline-block h-full align-middle relative flex items-center flex-col justify-center text-center text-white opacity-0 ease-in-out duration-100 group-hover:opacity-100">
                            <h2 className="text-lg"><PrismicText field={title} /></h2>
                            <p className="text-sm text-slate-300"><PrismicText field={sub_title} /></p>
                        </div>

                    </div>
                </div>
            </PrismicLink>
        </>

    );
};
