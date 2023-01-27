// https://maribel.qodeinteractive.com/portfolio-item/design-news-weekly/
import { PrismicText } from "@prismicio/react";

export const CostumeDetailsComponent = ( { title, sub_title, description, year, materials, patterns }) => {

    return (
        <div className="text-slate-700 ">
            <div className="grid grid-cols-3 gap-4 mb-20">
                <div className="col-span-2">
                    <h2 className="text-5xl"><PrismicText field={title} /></h2>
                    <p className="mb-10"><PrismicText field={sub_title} /></p>
                    <p><PrismicText field={description} /></p>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-4">
                    <div>
                        <h6 className="text-md font-bold">Year</h6>
                        {/*<p><PrismicText field={year} /></p>*/}
                    </div>
                        <div>
                            <h6 className="text-md font-bold">Materials</h6>
                            <p><PrismicText field={materials} /></p>
                        </div>
                        <div>
                            <h6 className="text-md font-bold">Patterns</h6>
                            <p><PrismicText field={patterns} /></p>
                        </div>
                    </div>
                </div>
            </div>
            <p></p>
        </div>
    );
};
