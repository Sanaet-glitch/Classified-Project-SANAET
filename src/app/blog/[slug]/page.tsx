import { getPostData, getAllPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { formatDate } from '@/lib/utils'; // Import formatDate
import GlassCard from '@/components/GlassCard';

// This function tells Next.js which slugs are available and should be pre-rendered
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  // The paths look like: [{ params: { slug: '...' } }, ...]
  // We just need the slug values: ['...', '...']
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

// This function generates metadata for the page (title, description)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: postData.title,
      // Add description from frontmatter if available, otherwise use a default
      // description: postData.summary || 'Blog post',
    };
  } catch (error) {
    // Handle case where post data might not be found for metadata generation
    return {
      title: 'Post Not Found',
    };
  }
}

// The main component to render a single blog post
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return (
      <GlassCard className="prose prose-invert mx-auto max-w-3xl px-4 py-8 lg:prose-xl flex flex-col gap-4">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">{post.title}</h1>
        <div className="text-gray-400 mb-2 text-sm">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <p className="text-gray-300 mb-2">[Placeholder summary for this post. Replace with real summary later.]</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-neon-blue/20 text-neon-blue px-2 py-0.5 rounded text-xs">#placeholder</span>
          <span className="bg-neon-pink/20 text-neon-pink px-2 py-0.5 rounded text-xs">#tag</span>
        </div>
        <MDXRemote source={post.content} options={post.mdxOptions} />
      </GlassCard>
    );
  } catch (error) {
    console.error(`Error fetching post data for slug \"${params.slug}\":`, error);
    notFound();
  }
}
