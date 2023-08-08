// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *about → Experience*
 */
export interface AboutDocumentDataExperienceItem {
  /**
   * Logo field in *about → Experience*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.experience[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Name field in *about → Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.experience[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Title field in *about → Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.experience[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Year field in *about → Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.experience[].year
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;
}

/**
 * Item in *about → Education*
 */
export interface AboutDocumentDataEducationItem {
  /**
   * Logo field in *about → Education*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Name field in *about → Education*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Title field in *about → Education*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Year field in *about → Education*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education[].year
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year: prismic.KeyTextField;
}

/**
 * Item in *about → Passion*
 */
export interface AboutDocumentDataPassionItem {
  /**
   * Title field in *about → Passion*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.passion[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Clubs field in *about → Passion*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.passion[].clubs
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  clubs: prismic.KeyTextField;

  /**
   * Description field in *about → Passion*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.passion[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Instagram field in *about → Passion*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.passion[].instagram
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;
}

/**
 * Item in *about → Volleyball*
 */
export interface AboutDocumentDataVolleyballItem {
  /**
   * Image field in *about → Volleyball*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.volleyball[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

type AboutDocumentDataSlicesSlice = RepeatSlice;

/**
 * Content for about documents
 */
interface AboutDocumentData {
  /**
   * Experience field in *about*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.experience[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  experience: prismic.GroupField<Simplify<AboutDocumentDataExperienceItem>>;

  /**
   * Education field in *about*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  education: prismic.GroupField<Simplify<AboutDocumentDataEducationItem>>;

  /**
   * Passion field in *about*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.passion[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  passion: prismic.GroupField<Simplify<AboutDocumentDataPassionItem>>;

  /**
   * Volleyball field in *about*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.volleyball[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  volleyball: prismic.GroupField<Simplify<AboutDocumentDataVolleyballItem>>;

  /**
   * Slice Zone field in *about*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice>
  /**
   * Meta Description field in *about*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *about*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *about*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * about document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type HomeDocumentDataSlicesSlice = SliderSliceSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * FullName field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.fullname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fullname: prismic.KeyTextField;

  /**
   * Intro field in *home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Occupation field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.occupation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  occupation: prismic.KeyTextField;

  /**
   * Location field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * headshot field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.headshot
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  headshot: prismic.ImageField<never>;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = AboutDocument | HomeDocument;

/**
 * Primary content in *Repeat → Items*
 */
export interface RepeatSliceDefaultItem {
  /**
   * title field in *Repeat → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: repeat.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * logo field in *Repeat → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: repeat.items[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for Repeat Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RepeatSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<RepeatSliceDefaultItem>
>;

/**
 * Slice variation for *Repeat*
 */
type RepeatSliceVariation = RepeatSliceDefault;

/**
 * Repeat Shared Slice
 *
 * - **API ID**: `repeat`
 * - **Description**: Repeat
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RepeatSlice = prismic.SharedSlice<"repeat", RepeatSliceVariation>;

/**
 * Primary content in *SliderSlice → Items*
 */
export interface SliderSliceSliceDefaultItem {
  /**
   * IconName field in *SliderSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slider_slice.items[].iconname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  iconname: prismic.KeyTextField;

  /**
   * SkillLabel field in *SliderSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slider_slice.items[].skilllabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skilllabel: prismic.KeyTextField;
}

/**
 * Default variation for SliderSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliderSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SliderSliceSliceDefaultItem>
>;

/**
 * Slice variation for *SliderSlice*
 */
type SliderSliceSliceVariation = SliderSliceSliceDefault;

/**
 * SliderSlice Shared Slice
 *
 * - **API ID**: `slider_slice`
 * - **Description**: SliderSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliderSliceSlice = prismic.SharedSlice<
  "slider_slice",
  SliderSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      RepeatSlice,
      RepeatSliceDefaultItem,
      RepeatSliceVariation,
      RepeatSliceDefault,
      SliderSliceSlice,
      SliderSliceSliceDefaultItem,
      SliderSliceSliceVariation,
      SliderSliceSliceDefault,
    };
  }
}
