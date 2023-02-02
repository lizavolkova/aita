import { PrismicText, SliceZone } from "@prismicio/react";
import { CostumeSubDetails } from "./CostumeSubDetails";
import { components } from "../slices";
import React from "react";

export const CostumeDetailsComponent = ({
  title,
  sub_title,
  description,
  year,
  materials,
  patterns,
  slices,
}) => {
  const mainImageGallerySlice = slices[0] ? [slices[0]] : undefined;
  const [, ...otherSlices] = slices;

  return (
    <div className="text-slate-700 ">
      <div className="mb-20">
        <div className="grid grid-cols-12">
          <section className="col-span-12 pr-0 md:pr-5 lg:col-span-12">
            <h2>
              <PrismicText field={title} />
            </h2>
            <span className="sub-title">
              <PrismicText field={sub_title} />
            </span>

            <div className="relative flex w-12 items-center py-3 lg:py-5">
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <p className="pb-5">
              <PrismicText field={description} />
            </p>
          </section>

          {mainImageGallerySlice && (
            <section className="col-span-12 lg:col-span-12">
              <SliceZone
                slices={mainImageGallerySlice}
                components={components}
              />
            </section>
          )}

          <section className="col-span-12 my-6 bg-gray-100 p-6 lg:col-span-12">
            <div className="col-span-1">
              <CostumeSubDetails
                materials={materials}
                patterns={patterns}
                year={year}
              />
            </div>
          </section>

          {otherSlices.length > 0 && (
            <section className="col-span-12 lg:col-span-12">
              <SliceZone slices={otherSlices} components={components} />
            </section>
          )}
        </div>
      </div>

      <p></p>
    </div>
  );
};
