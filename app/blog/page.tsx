import Link from 'next/link';
import fs from 'fs'
import path from 'path'
import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc'

const getPostByPostPath = async (fileName: string) => {
    const slug = fileName.replace('.mdx', '');
    const postPath = path.join('posts', fileName);
    const postContent = fs.readFileSync(postPath, { encoding: 'utf8' });

    const { frontmatter, content } = await compileMDX({
        source: postContent,
        options: { parseFrontmatter: true }
    })

    return { meta: { ...frontmatter }, slug: slug, content }
}

const getAllPostsMeta = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const promises = files.map(async (filename) => {
        const { slug, meta } = await getPostByPostPath(filename)
        return meta.draft === true ? null : { slug, meta }
    })
    const posts = await Promise.all(promises)
    return posts.filter(Boolean)
}

export default async function PostList() {
    const postList = await getAllPostsMeta();
    const sortedPostList = postList.sort((a, b) => {
        return (a?.meta.date as string) > (b?.meta.date as string) ? -1 : 1;
    })
    return <>
        {sortedPostList?.map(post => (
            <Link
                href={`blog/${post?.slug}`}
                key={post?.slug}
            >
                <h1>{post?.slug}</h1>
                <p>{post?.meta.title as string}</p>
                <p>{post?.meta.date as string}</p>
            </Link>
        ))}
    </>
}
