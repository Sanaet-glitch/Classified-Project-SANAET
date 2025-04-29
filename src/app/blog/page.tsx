import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/mdx';
import { formatDate } from '@/lib/utils'; // Import formatDate
import type { Metadata } from 'next';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on web development, design, and more.',
};

export default function BlogIndexPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <ul className="space-y-8">
        {allPosts.map(({ slug, date, title }: PostData) => (
          <li key={slug}>
            <GlassCard className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold mb-1">{title}</h2>
              <p className="text-gray-400 text-sm mb-2">
                <time dateTime={date}>{formatDate(date)}</time>
              </p>
              <p className="text-gray-300 mb-2">[Placeholder summary for this post. Replace with real summary later.]</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-neon-blue/20 text-neon-blue px-2 py-0.5 rounded text-xs">#placeholder</span>
                <span className="bg-neon-pink/20 text-neon-pink px-2 py-0.5 rounded text-xs">#tag</span>
              </div>
              <div className="mt-auto">
                <Button href={`/blog/${slug}`} className="border border-neon-blue text-neon-blue bg-transparent hover:bg-neon-blue hover:text-gray-900 shadow-neon-blue">
                  Read More
                </Button>
              </div>
            </GlassCard>
          </li>
        ))}
      </ul>
      {allPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No blog posts yet. Check back soon!</p>
      )}
    </div>
  );
}
