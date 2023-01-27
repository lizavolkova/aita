import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";


export const Footer = ({ settings }) => {
  return (
    <Bounded as="footer">
      <div className="grid grid-cols-1 justify-items-center gap-24">
        <HorizontalDivider />

        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
          Copyright 2023
        </div>
      </div>
    </Bounded>
  );
};
