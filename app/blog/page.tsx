import Link from 'next/link';

export default function PostList({ posts }: { posts: string[] }) {
  return (
    <ul>
      hi
      {/* {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      ))} */}
    </ul>
  );
}
