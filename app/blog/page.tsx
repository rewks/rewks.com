import { getAllPostsMeta } from '@/app/components/mdx-reader'
import BlogCard from '@/app/components/blogCard'
import styles from './page.module.css'

export default async function PostList() {
    const postList = await getAllPostsMeta();
    const sortedPostList = postList.sort((a, b) => {
        return (a?.meta.date as string) > (b?.meta.date as string) ? -1 : 1;
    })
    return <>
        <div className={styles.cards_container}>
            {sortedPostList.map(post => (
                <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    meta={post.meta}
                />
            ))}
        </div>
    </>
}