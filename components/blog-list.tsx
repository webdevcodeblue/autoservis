'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-intersection-observer';
import Link from 'next/link';
import type { Post, Category } from '@/sanity/types';
import { BlogCard } from './blog-card';

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

export function BlogList({ posts, categories }: BlogListProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories?.some((cat) => cat.slug.current === selectedCategory)
      )
    : posts;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Back link */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backToHome')}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className={`text-center mb-12 animate-fade-in ${inView ? 'visible' : ''}`}>
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
            {t('blogSubheading')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
            <span className="text-gradient">{t('blogTitle')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('blogDescription')}
          </p>
        </div>

        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={
                selectedCategory === null
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }
            >
              {t('blogAllCategories')}
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat._id}
                variant={selectedCategory === cat.slug.current ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.slug.current)}
                className={
                  selectedCategory === cat.slug.current
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }
              >
                {cat.title}
              </Button>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post._id} post={post} index={index} inView={inView} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {t('blogNoPosts')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
