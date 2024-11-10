// ... existing types
export interface CarouselStoryblok {
  _uid: string;
  component: 'carousel';
  items?: CarouselItemStoryblok[];
  [k: string]: any;
}

export interface CarouselItemStoryblok {
  _uid: string;
  component: 'carousel_item';
  image?: {
    filename: string;
    alt?: string;
  };
  title?: string;
  category?: string;
  description?: string;
  content?: any;
  [k: string]: any;
}
