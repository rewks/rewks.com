import { getAllPostsMeta } from '@/app/components/mdx-reader'
import BlogCard from '@/app/components/blogCard'
import BlogPagesNav from '@/app/components/blogPagesNav'
import styles from './page.module.css'

const postsPerPage = 10;

type Props = {
    searchParams?: {
        page?: string,
    },
}

export default async function PostList(props: Props) {
    const postList = await getAllPostsMeta();
    const sortedPostList = postList.sort((a, b) => {
        return (a?.meta.date as string) > (b?.meta.date as string) ? -1 : 1;
    })

    const totalPages = Math.ceil(sortedPostList.length / postsPerPage)
    let page = props.searchParams?.page? props.searchParams?.page : 1
    
    page = +page ? +page : 1
    page = page <= totalPages ? page : 1

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
        <div className={styles.page_navigation_container}>
            <BlogPagesNav
                currentPage={page}
                totalPages={totalPages}
            />
        </div>
    </>
}