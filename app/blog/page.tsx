import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogList } from '@/components/blog-list';
import { getAllPosts, getAllCategories } from '@/sanity/queries';

export const metadata: Metadata = {
  title: 'Blog | Autoservis Katanović',
  description:
    'Pročitajte najnovije vijesti, savjete i članke o održavanju vozila na blogu Autoservisa Katanović.',
  keywords: [
    'blog autoservis',
    'savjeti za automobile',
    'održavanje vozila blog',
    'autoservis katanović blog',
    'auto savjeti',
  ],
  openGraph: {
    title: 'Blog | Autoservis Katanović',
    description:
      'Najnovije vijesti, savjeti i članci o održavanju vozila.',
    type: 'website',
    images: [
      {
        url: '/images/about-autoservis.webp',
        width: 1200,
        height: 630,
        alt: 'Autoservis Katanović Blog',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <BlogList posts={posts} categories={categories} />
      </main>
      <Footer />
    </div>
  );
}
