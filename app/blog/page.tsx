import { getAllPostsMeta } from '@/app/components/mdx-reader'
import BlogCard from '@/app/components/blogCard'
import styles from './page.module.css'

const postsPerPage = 3;

type Props = {
    searchParams?: {
        page?: number,
    },
}

export default async function PostList(props: Props) {
    const postList = await getAllPostsMeta();
    const sortedPostList = postList.sort((a, b) => {
        return (a?.meta.date as string) > (b?.meta.date as string) ? -1 : 1;
    })

    let page = props.searchParams?.page? props.searchParams?.page : 1
    const totalPages = Math.ceil(sortedPostList.length / postsPerPage)

    page = page > totalPages ? 1 : page
    const pagePostList = sortedPostList.slice(postsPerPage * (page - 1), postsPerPage * page)

    return <>
        <div className={styles.cards_container}>
            {pagePostList.map(post => (
                <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    meta={post.meta}
                />
            ))}
        </div>
    </>
}