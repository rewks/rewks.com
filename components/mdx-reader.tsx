import fs from 'fs'
import path from 'path'
import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc'

export const getPostByPostPath = async (fileName: string) => {
    const slug = fileName.replace('.mdx', '');
    const postPath = path.join('posts', fileName);
    const postContent = fs.readFileSync(postPath, { encoding: 'utf8' });

    const { frontmatter, content } = await compileMDX({
        source: postContent,
        options: { parseFrontmatter: true }
    })

    return { meta: { ...frontmatter }, slug: slug, content }
}

export const getAllPostsMeta = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const promises = files.map(async (filename) => {
        const { slug, meta } = await getPostByPostPath(filename)
        return meta.draft === true ? null : { slug, meta }
    })
    const posts = await Promise.all(promises)
    return posts.filter(Boolean)
}