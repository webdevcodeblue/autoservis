'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useInView } from '@/hooks/use-intersection-observer';
import Link from 'next/link';
import type { Post } from '@/sanity/types';
import { BlogCard } from './blog-card';

interface BlogSectionProps {
  posts: Post[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (posts.length === 0) return null;

  const displayPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="section-padding relative overflow-hidden smooth-scroll">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 animate-fade-in ${inView ? 'visible' : ''}`}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} inView={inView} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md btn-hover">
              {t('blogViewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
