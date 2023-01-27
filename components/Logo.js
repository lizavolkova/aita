import {PrismicLink} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import {PrismicNextImage} from "@prismicio/next";

export const Logo = ({ logoImg }) => {
    return (
        <div className="px-4">
            <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
                <PrismicLink href="/" tabIndex="-1">
                    <div className="h-auto w-90">
                        {prismicH.isFilled.image(logoImg) && (
                            <PrismicNextImage
                                field={logoImg}
                                className="max-w-full h-auto"
                            />
                        )}
                    </div>
                </PrismicLink>
            </div>
        </div>
    );
};
