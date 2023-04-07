import { getPostByName } from '@/lib/mdx-reader'
import styles from './page.module.css'

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
    <div>
        <div className={styles.post_header}>
            <h1>
                {meta.title as string}
            </h1>
            <h5>
                {meta.date as string}
            </h5>
        </div>
        <div>
            {content}
        </div>
    </div>
    </>
}
