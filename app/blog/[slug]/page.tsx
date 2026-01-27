import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogPostDetail } from '@/components/blog-post-detail';
import { getPostBySlug, getAllPostSlugs } from '@/sanity/queries';
import { urlFor } from '@/sanity/image';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((s) => ({
    slug: s.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Autoservis Katanović',
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : '/images/about-autoservis.webp';

  return {
    title: `${title} | Autoservis Katanović`,
    description,
    openGraph: {
      title: `${title} | Autoservis Katanović`,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'Autoservis Katanović'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <BlogPostDetail post={post} />
      </main>
      <Footer />
    </div>
  );
}
