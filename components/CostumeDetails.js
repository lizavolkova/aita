// https://maribel.qodeinteractive.com/portfolio-item/design-news-weekly/

// 2 column layout: https://azalea.qodeinteractive.com/portfolio-item/smart-style-2/

import {PrismicText, SliceZone} from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";
import {ImageGalleryComponent} from "./ImageGallery";
import {CostumeSubDetails} from "./CostumeSubDetails";
import {Bounded} from "./Bounded";
import {components} from "../slices";
import React from "react";

export const CostumeDetailsComponent = ({
  title,
  sub_title,
  description,
  year,
  materials,
  patterns,
  featured_image,
  slices
}) => {
  const mainImageGallerySlice = [slices[0]];
  const [, ...otherSlices] = slices;

  return (
    <div className="text-slate-700 ">
      <div className="mb-20">

          <div className="grid grid-cols-12">

            <section className="col-span-12 lg:col-span-8">
              <SliceZone slices={mainImageGallerySlice} components={components} />
            </section>

            <section className="col-span-12 lg:col-span-4 lg:pl-5">
              <h2>
                <PrismicText field={title} />
              </h2>
              <span className="sub-title">
                <PrismicText field={sub_title} />
              </span>

              <div className="relative flex py-3 lg:py-5 items-center w-12">
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <p className="pb-5 lg:pb-10">
                <PrismicText field={description} />
              </p>

              <div className="col-span-2">
                <CostumeSubDetails materials={materials} patterns={patterns} year={year}/>
              </div>
            </section>

            <section className="col-span-12 lg:col-span-8">
              <SliceZone slices={otherSlices} components={components} />
            </section>






          </div>


      </div>







      <p>

        {/*<PrismicNextImage*/}
        {/*    field={featured_image}*/}
        {/*    className="block h-auto w-full"*/}
        {/*/>*/}
      </p>
    </div>
  );
};
