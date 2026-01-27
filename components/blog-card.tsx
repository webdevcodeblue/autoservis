'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import Link from 'next/link';
import type { Post } from '@/sanity/types';
import { urlFor } from '@/sanity/image';

interface BlogCardProps {
  post: Post;
  index?: number;
  inView?: boolean;
}

export function BlogCard({ post, index = 0, inView = true }: BlogCardProps) {
  const { t } = useLanguage();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('hr-HR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(340).url()
    : null;

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <Card
        className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 card-hover animate-fade-in overflow-hidden h-full ${
          inView ? 'visible' : ''
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {/* Featured Image */}
        {imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              className="w-full h-full object-cover"
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
            />
            {/* Category badges */}
            {post.categories && post.categories.length > 0 && (
              <div className="absolute bottom-3 left-3 flex gap-2">
                {post.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat._id}
                    className="bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        <CardContent className="p-6">
          {/* Date and Author */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Read more */}
          <div className="mt-4">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
              {t('blogReadMore')} &rarr;
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
