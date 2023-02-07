import SliderSlice from "../../components/slices/SliderSlice";

/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param { SliderProps }
 */
const Slider = ({ slice }) => <SliderSlice slice={slice} />;

export default Slider;
