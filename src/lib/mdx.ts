import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypePrettyCode from 'rehype-pretty-code';

// Define the path to the posts directory
const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  // Add any other front matter properties you expect
  [key: string]: any;
}

export interface PostContent extends PostData {
  content: string;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx')) // Filter for mdx files
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...(matterResult.data as { title: string; date: string }), // Cast data to expected type
      } as PostData; // Ensure the returned object matches PostData
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like:
  // [
  //   {
  //     params: {
  //       slug: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       slug: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.mdx$/, ''),
        },
      };
    });
}

export async function getPostData(slug: string): Promise<PostContent & { mdxOptions: any }> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // MDX options for syntax highlighting
  const mdxOptions = {
    mdxOptions: {
      rehypePlugins: [
        [rehypePrettyCode, {
          theme: 'github-dark', // You can change to 'one-dark', 'github-light', etc.
        }],
      ],
    },
  };

  // Combine the data with the slug and content
  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as { title: string; date: string }),
    mdxOptions,
  } as PostContent & { mdxOptions: any };
}
