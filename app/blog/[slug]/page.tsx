import { getPostByName } from '@/lib/mdx-reader'

const getPostContent = async (slug: string) => {
    const { meta, content } = await getPostByName(`${slug}.mdx`);
    return { meta, content }
}

export default async function Page({
    params,
}: {
    params: { slug: string };
}) {
    const { meta, content } = await getPostContent(params.slug)

    return <>
        {content}
    </>
}
