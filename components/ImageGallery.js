// https://maribel.qodeinteractive.com/portfolio-item/design-news-weekly/
// https://melania.themerex.net/product/creative-dinnerware/
// https://preview.themeforest.net/item/ohio-creative-wordpress-theme/full_screen_preview/25193838?_ga=2.241577797.676646449.1674778444-606654686.1642022954&_gac=1.262963710.1674778444.CjwKCAiA5sieBhBnEiwAR9oh2h1NiqIIak9lFe2KYPgUtG-AKPBDJIvilN5cAkwfeOTEB7fX57IDZRoCPRwQAvD_BwE
// https://maribel.qodeinteractive.com/portfolio/masonry/
// https://themeforest.net/item/vhuge-resume-vcard-cv/22130083

import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


export const ImageGalleryComponent = ( { children }) => {
    return (

            <div className="masonry">

            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                    {children}
                </Masonry>
            </ResponsiveMasonry>
            </div>

    );
};
