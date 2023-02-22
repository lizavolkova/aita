// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
    /**
     * Title field in *Article*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the article
     * - **API ID Path**: article.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Sub Title field in *Article*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.sub_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_title: prismicT.RichTextField;
    /**
     * Publish Date field in *Article*
     *
     * - **Field Type**: Date
     * - **Placeholder**: Date the article was published
     * - **API ID Path**: article.publishDate
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    publishDate: prismicT.DateField;
    /**
     * Preview Image field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.preview_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    preview_image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Article*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: article.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ArticleDocumentDataSlicesSlice>;
    /**
     * Meta Title field in *Article*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    meta_title: prismicT.RichTextField;
    /**
     * Meta Description field in *Article*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    meta_description: prismicT.RichTextField;
    /**
     * Meta Image 1x1 field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.meta_image_1x1
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    meta_image_1x1: prismicT.ImageField<never>;
    /**
     * Meta Image 4x3 field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.meta_image_4x3
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    meta_image_4x3: prismicT.ImageField<never>;
    /**
     * Meta Image 16x9 field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.meta_image_16x9
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    meta_image_16x9: prismicT.ImageField<never>;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice = ImageSlice | QuoteSlice | TextSlice | ContactFormSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticleDocumentData>, "article", Lang>;
/** Content for Costume documents */
interface CostumeDocumentData {
    /**
     * Title field in *Costume*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Sub Title field in *Costume*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.sub_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_title: prismicT.RichTextField;
    /**
     * Year field in *Costume*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.year
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    year: prismicT.RichTextField;
    /**
     * FeaturedImage field in *Costume*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.featured_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featured_image: prismicT.ImageField<never>;
    /**
     * Description field in *Costume*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Materials field in *Costume*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.materials
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    materials: prismicT.RichTextField;
    /**
     * Patterns field in *Costume*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.patterns
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    patterns: prismicT.RichTextField;
    /**
     * Resources field in *Costume*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.resources
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    resources: prismicT.RichTextField;
    /**
     * Preview Image field in *Costume*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.preview_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    preview_image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Costume*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: costume.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<CostumeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Costume → Slice Zone*
 *
 */
type CostumeDocumentDataSlicesSlice = HeadingWithTextSlice | ImageGallerySlice | SliderSlice | ArticlePreviewSlice;
/**
 * Costume document from Prismic
 *
 * - **API ID**: `costume`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CostumeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CostumeDocumentData>, "costume", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Homepage Label field in *Navigation*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Label for the homepage link
     * - **API ID Path**: navigation.homepageLabel
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    homepageLabel: prismicT.TitleField;
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = ImageSlice | QuoteSlice | TextSlice | ContactFormSlice | SliderSlice | InstagramFeedSlice | AboutMeShortSlice | ArticlePreviewSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Name field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Name of your blog (e.g. your name)
     * - **API ID Path**: settings.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Logo field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logoImg
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logoImg: prismicT.ImageField<never>;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = ArticleDocument | CostumeDocument | NavigationDocument | PageDocument | SettingsDocument;
/**
 * Primary content in AboutMeShort → Primary
 *
 */
interface AboutMeShortSliceDefaultPrimary {
    /**
     * Heading field in *AboutMeShort → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: about_me_short.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.TitleField;
    /**
     * Description field in *AboutMeShort → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: about_me_short.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Photo field in *AboutMeShort → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_me_short.primary.photo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    photo: prismicT.ImageField<never>;
}
/**
 * Default variation for AboutMeShort Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AboutMeShort`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutMeShortSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AboutMeShortSliceDefaultPrimary>, never>;
/**
 * Slice variation for *AboutMeShort*
 *
 */
type AboutMeShortSliceVariation = AboutMeShortSliceDefault;
/**
 * AboutMeShort Shared Slice
 *
 * - **API ID**: `about_me_short`
 * - **Description**: `AboutMeShort`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutMeShortSlice = prismicT.SharedSlice<"about_me_short", AboutMeShortSliceVariation>;
/**
 * Primary content in ArticlePreview → Primary
 *
 */
interface ArticlePreviewSliceDefaultPrimary {
    /**
     * Title field in *ArticlePreview → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: article_preview.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ArticlePreview → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: article_preview.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ArticlePreview → Items
 *
 */
export interface ArticlePreviewSliceDefaultItem {
    /**
     * Costume field in *ArticlePreview → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: article_preview.items[].costume
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    costume: prismicT.RelationField<"costume">;
    /**
     * Article field in *ArticlePreview → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: article_preview.items[].article
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    article: prismicT.RelationField<"article">;
}
/**
 * Default variation for ArticlePreview Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ArticlePreview`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticlePreviewSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ArticlePreviewSliceDefaultPrimary>, Simplify<ArticlePreviewSliceDefaultItem>>;
/**
 * Slice variation for *ArticlePreview*
 *
 */
type ArticlePreviewSliceVariation = ArticlePreviewSliceDefault;
/**
 * ArticlePreview Shared Slice
 *
 * - **API ID**: `article_preview`
 * - **Description**: `ArticlePreview`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticlePreviewSlice = prismicT.SharedSlice<"article_preview", ArticlePreviewSliceVariation>;
/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *ContactForm*
 *
 */
type ContactFormSliceVariation = ContactFormSliceDefault;
/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSlice = prismicT.SharedSlice<"contact_form", ContactFormSliceVariation>;
/**
 * Primary content in HeadingWithText → Primary
 *
 */
interface HeadingWithTextSliceDefaultPrimary {
    /**
     * Title field in *HeadingWithText → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: heading_with_text.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeadingWithText → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: heading_with_text.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for HeadingWithText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeadingWithText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeadingWithTextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeadingWithTextSliceDefaultPrimary>, never>;
/**
 * Slice variation for *HeadingWithText*
 *
 */
type HeadingWithTextSliceVariation = HeadingWithTextSliceDefault;
/**
 * HeadingWithText Shared Slice
 *
 * - **API ID**: `heading_with_text`
 * - **Description**: `HeadingWithText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeadingWithTextSlice = prismicT.SharedSlice<"heading_with_text", HeadingWithTextSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
    /**
     * Hide modal field in *Image → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: image.primary.hide_modal
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    hide_modal: prismicT.BooleanField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceWidePrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *Image → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Optional - Caption under the image
     * - **API ID Path**: image.primary.caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Wide variation for Image Slice
 *
 * - **API ID**: `wide`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceWide = prismicT.SharedSliceVariation<"wide", Simplify<ImageSliceWidePrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceWide;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in ImageGallery → Primary
 *
 */
interface ImageGallerySliceDefaultPrimary {
    /**
     * Title field in *ImageGallery → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: image_gallery.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ImageGallery → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: image_gallery.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ImageGallery → Items
 *
 */
export interface ImageGallerySliceDefaultItem {
    /**
     * Image field in *ImageGallery → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_gallery.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Caption field in *ImageGallery → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_gallery.items[].caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption: prismicT.RichTextField;
}
/**
 * Default variation for ImageGallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageGallerySliceDefaultPrimary>, Simplify<ImageGallerySliceDefaultItem>>;
/**
 * Slice variation for *ImageGallery*
 *
 */
type ImageGallerySliceVariation = ImageGallerySliceDefault;
/**
 * ImageGallery Shared Slice
 *
 * - **API ID**: `image_gallery`
 * - **Description**: `ImageGallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGallerySlice = prismicT.SharedSlice<"image_gallery", ImageGallerySliceVariation>;
/**
 * Primary content in InstagramFeed → Primary
 *
 */
interface InstagramFeedSliceDefaultPrimary {
    /**
     * Title field in *InstagramFeed → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: instagram_feed.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Placeholder field in *InstagramFeed → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: instagram_feed.primary.placeholder
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    placeholder: prismicT.ImageField<never>;
}
/**
 * Default variation for InstagramFeed Slice
 *
 * - **API ID**: `default`
 * - **Description**: `InstagramFeed`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InstagramFeedSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<InstagramFeedSliceDefaultPrimary>, never>;
/**
 * Slice variation for *InstagramFeed*
 *
 */
type InstagramFeedSliceVariation = InstagramFeedSliceDefault;
/**
 * InstagramFeed Shared Slice
 *
 * - **API ID**: `instagram_feed`
 * - **Description**: `InstagramFeed`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InstagramFeedSlice = prismicT.SharedSlice<"instagram_feed", InstagramFeedSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
    /**
     * Quote field in *Quote → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Quote without quotation marks
     * - **API ID Path**: quote.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.TitleField;
    /**
     * Source field in *Quote → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Source of the quote
     * - **API ID Path**: quote.primary.source
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    source: prismicT.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<QuoteSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismicT.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Slider → Primary
 *
 */
interface SliderSliceDefaultPrimary {
    /**
     * Show Pagination field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.show_pagination
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show_pagination: prismicT.BooleanField;
    /**
     * Show Navigation Arrows field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.show_navigation_arrows
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show_navigation_arrows: prismicT.BooleanField;
    /**
     * Show Caption field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.show_caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show_caption: prismicT.BooleanField;
    /**
     * Auto Play field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.auto_play
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    auto_play: prismicT.BooleanField;
    /**
     * Effect field in *Slider → Primary*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: slider.primary.effect
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    effect: prismicT.SelectField<"None" | "fade">;
    /**
     * ShowHomeText field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.showhometext
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    showhometext: prismicT.BooleanField;
    /**
     * Dim Slides field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.dim_slides
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    dim_slides: prismicT.BooleanField;
}
/**
 * Item in Slider → Items
 *
 */
export interface SliderSliceDefaultItem {
    /**
     * Image field in *Slider → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: slider.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *Slider → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: slider.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Slider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Slider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SliderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SliderSliceDefaultPrimary>, Simplify<SliderSliceDefaultItem>>;
/**
 * Primary content in Slider → Primary
 *
 */
interface SliderSliceWithDescriptionPrimary {
    /**
     * Title field in *Slider → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: slider.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Slider → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: slider.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Show Pagination field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.show_pagination
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show_pagination: prismicT.BooleanField;
    /**
     * Show Navigation Arrows field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.show_navigation_arrows
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show_navigation_arrows: prismicT.BooleanField;
    /**
     * Show Caption field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.show_caption
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show_caption: prismicT.BooleanField;
    /**
     * Auto Play field in *Slider → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: slider.primary.auto_play
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    auto_play: prismicT.BooleanField;
    /**
     * Text Placement field in *Slider → Primary*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: slider.primary.text_placement
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    text_placement: prismicT.SelectField<"Right" | "Left" | "Top" | "Bottom">;
}
/**
 * Item in Slider → Items
 *
 */
export interface SliderSliceWithDescriptionItem {
    /**
     * Image field in *Slider → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: slider.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *Slider → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: slider.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * With description variation for Slider Slice
 *
 * - **API ID**: `withDescription`
 * - **Description**: `Slider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SliderSliceWithDescription = prismicT.SharedSliceVariation<"withDescription", Simplify<SliderSliceWithDescriptionPrimary>, Simplify<SliderSliceWithDescriptionItem>>;
/**
 * Slice variation for *Slider*
 *
 */
type SliderSliceVariation = SliderSliceDefault | SliderSliceWithDescription;
/**
 * Slider Shared Slice
 *
 * - **API ID**: `slider`
 * - **Description**: `Slider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SliderSlice = prismicT.SharedSlice<"slider", SliderSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with rich formatting
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceDefaultPrimary>, never>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceHeadingWithTextPrimary {
    /**
     * Heading field in *Text → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: text.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.TitleField;
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Text with rich formatting
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Heading With Text variation for Text Slice
 *
 * - **API ID**: `headingWithText`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceHeadingWithText = prismicT.SharedSliceVariation<"headingWithText", Simplify<TextSliceHeadingWithTextPrimary>, never>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault | TextSliceHeadingWithText;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ArticleDocumentData, ArticleDocumentDataSlicesSlice, ArticleDocument, CostumeDocumentData, CostumeDocumentDataSlicesSlice, CostumeDocument, NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, AboutMeShortSliceDefaultPrimary, AboutMeShortSliceDefault, AboutMeShortSliceVariation, AboutMeShortSlice, ArticlePreviewSliceDefaultPrimary, ArticlePreviewSliceDefaultItem, ArticlePreviewSliceDefault, ArticlePreviewSliceVariation, ArticlePreviewSlice, ContactFormSliceDefault, ContactFormSliceVariation, ContactFormSlice, HeadingWithTextSliceDefaultPrimary, HeadingWithTextSliceDefault, HeadingWithTextSliceVariation, HeadingWithTextSlice, ImageSliceDefaultPrimary, ImageSliceDefault, ImageSliceWidePrimary, ImageSliceWide, ImageSliceVariation, ImageSlice, ImageGallerySliceDefaultPrimary, ImageGallerySliceDefaultItem, ImageGallerySliceDefault, ImageGallerySliceVariation, ImageGallerySlice, InstagramFeedSliceDefaultPrimary, InstagramFeedSliceDefault, InstagramFeedSliceVariation, InstagramFeedSlice, QuoteSliceDefaultPrimary, QuoteSliceDefault, QuoteSliceVariation, QuoteSlice, SliderSliceDefaultPrimary, SliderSliceDefaultItem, SliderSliceDefault, SliderSliceWithDescriptionPrimary, SliderSliceWithDescriptionItem, SliderSliceWithDescription, SliderSliceVariation, SliderSlice, TextSliceDefaultPrimary, TextSliceDefault, TextSliceHeadingWithTextPrimary, TextSliceHeadingWithText, TextSliceVariation, TextSlice };
    }
}
