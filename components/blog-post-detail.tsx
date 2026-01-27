'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import type { Post } from '@/sanity/types';
import { urlFor } from '@/sanity/image';
import { portableTextComponents } from './portable-text-components';

interface BlogPostDetailProps {
  post: Post;
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  const { t } = useLanguage();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('hr-HR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const mainImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : null;

  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image).width(80).height(80).url()
    : null;

  return (
    <article className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Back link */}
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('blogBackToList')}
            </Button>
          </Link>
        </div>

        {/* Article container */}
        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat._id}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  <Tag className="inline h-3 w-3 mr-1" />
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            {/* Author */}
            {post.author && (
              <div className="flex items-center gap-3">
                {authorImageUrl ? (
                  <img
                    src={authorImageUrl}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-200 dark:ring-blue-600"
                    loading="eager"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {post.author.name}
                  </p>
                  {post.author.role && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {post.author.role}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Featured Image */}
          {mainImageUrl && (
            <div className="mb-10 rounded-xl overflow-hidden">
              <img
                src={mainImageUrl}
                alt={post.mainImage?.alt || post.title}
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          )}

          {/* Body content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-xl prose-blockquote:border-blue-600 dark:prose-blockquote:border-blue-400">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {t('blogCTATitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('blogCTADescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kontakt">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md btn-hover">
                  {t('contactUs')}
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-2 rounded-md"
                >
                  {t('blogViewAll')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
