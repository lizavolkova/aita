import { PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";

export const Logo = ({ logoImg }) => {
  return (
    <div className="p-2">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        <PrismicLink href="/" tabIndex="-1">
          <div className="h-auto w-64">
            {prismicH.isFilled.image(logoImg) && (
              <PrismicNextImage field={logoImg} className="h-auto max-w-full" />
            )}
          </div>
        </PrismicLink>
      </div>
    </div>
  );
};
