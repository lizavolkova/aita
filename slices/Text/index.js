import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => {
  console.log(slice.primary);
  return (
    <section>
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className="">
          {slice.primary.heading && (
            <PrismicRichText field={slice.primary.heading} />
          )}
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </section>
  );
};

export default Text;
