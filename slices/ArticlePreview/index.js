import ArticlePreviewSlice from "../../components/slices/ArticlePreviewSlice";
/**
 * @typedef {import("@prismicio/client").Content.ArticlePreviewSlice} ArticlePreviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlePreviewSlice>} ArticlePreviewProps
 * @param { ArticlePreviewProps }
 */
const ArticlePreview = ({ slice }) => <ArticlePreviewSlice slice={slice} />;

export default ArticlePreview;
