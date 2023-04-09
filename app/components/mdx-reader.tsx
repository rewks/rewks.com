import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import Quote from './quote'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'


const root = path.join(process.cwd(), 'app', 'blog-posts')

export async function getPostByName(fileName: string) {
    const slug = fileName.replace('.mdx', '');
    const postPath = path.join(root, fileName);
    const postContent = fs.readFileSync(postPath, { encoding: 'utf8' });

    const { frontmatter, content } = await compileMDX({
        source: postContent,
        options: { 
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeCodeTitles,
                    [rehypePrism, { ignoreMissing: true }],
                ]
            }
        },
        components: {
            Image,
            Link,
            Quote,
        }
    })

    return { meta: { ...frontmatter }, slug: slug, content }
}

export async function getAllPostsMeta() {
    const files = fs.readdirSync(root)
    const promises = files.map(async (filename) => {
        const { slug, meta } = await getPostByName(filename)
        return meta.draft === true ? null : { slug, meta }
    })
    const posts = await Promise.all(promises)
    const filteredPosts = posts.filter((post): post is { slug: string; meta: { [x: string]: unknown; }; } => { return post !== null });
    return filteredPosts
}