import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: SanityImage;
  bio?: string;
  role?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  language: 'hr' | 'en' | 'de' | 'it' | 'es';
  author: Author;
  mainImage: SanityImage;
  categories: Category[];
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}
