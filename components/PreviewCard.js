import { PrismicText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const PreviewCard = ({ costume }) => {
    const { preview_image, title, sub_title } = costume.data;

    return (
        <>
            <PrismicLink href={costume.url}>
                <PrismicNextImage
                    field={preview_image}
                    className="block h-auto w-full"
                />
                <h2 className="text-center">
                    <PrismicText field={title} />
                </h2>
                <p className="text-sm text-slate-300 uppercase text-center">
                    <PrismicText field={sub_title} />
                </p>
            </PrismicLink>
        </>
    );
};
