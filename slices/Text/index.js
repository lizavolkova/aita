import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  return (
    <section>
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className="">
          {slice.primary.heading && (
            <PrismicRichText field={slice.primary.heading} className="mb-5" />
          )}
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </section>
  );
};

export default Text;
