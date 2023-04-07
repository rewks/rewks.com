import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/mdx-reader'
import BlogCard from './blogCard'
import styles from './page.module.css'

export default async function PostList() {
    const postList = await getAllPostsMeta();
    const sortedPostList = postList.sort((a, b) => {
        return (a?.meta.date as string) > (b?.meta.date as string) ? -1 : 1;
    })
    return <>
        <div className={styles.cards_container}>
            {sortedPostList?.map(post => <BlogCard slug={post?.slug} meta={post?.meta}/>)}
        </div>
    </>
}
