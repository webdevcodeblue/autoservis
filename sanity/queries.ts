import { client } from './client';
import type { Post, Category } from './types';

export async function getAllPosts(): Promise<Post[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        language,
        author->{_id, name, slug, image, bio, role},
        mainImage,
        categories[]->{_id, title, slug, description},
        publishedAt,
        excerpt,
        seoTitle,
        seoDescription
      }`
    );
  } catch {
    return [];
  }
}

export async function getLatestPosts(limit: number = 3): Promise<Post[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        slug,
        language,
        author->{_id, name, slug, image, bio, role},
        mainImage,
        categories[]->{_id, title, slug, description},
        publishedAt,
        excerpt
      }`,
      { limit }
    );
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        language,
        author->{_id, name, slug, image, bio, role},
        mainImage,
        categories[]->{_id, title, slug, description},
        publishedAt,
        excerpt,
        body,
        seoTitle,
        seoDescription
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export async function getAllPostSlugs(): Promise<{ slug: { current: string } }[]> {
  try {
    return await client.fetch(`*[_type == "post"] { slug }`);
  } catch {
    return [];
  }
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    return await client.fetch(
      `*[_type == "category"] | order(title asc) {
        _id,
        title,
        slug,
        description
      }`
    );
  } catch {
    return [];
  }
}
