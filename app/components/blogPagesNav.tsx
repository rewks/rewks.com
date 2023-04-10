import Link from 'next/link'
import styles from './styles/blogPagesNav.module.css'

export default function BlogPagesNav ({
    currentPage,
    totalPages
}:{
    currentPage: number,
    totalPages: number,
}) {
    const generateLinkItem = (page: number) => {
        if (page === currentPage) {
            return <Link className={styles.current_page} key={page} href={`/blog?page=${page}`}>{page}</Link>
        }
        return <Link key={page} href={`/blog?page=${page}`}>{page}</Link>
    }
    const pageLinks = [];

    pageLinks.push(generateLinkItem(1))
    if (totalPages > 4 && currentPage > 3) {   
        pageLinks.push(<span key={"list-min-1"}>...</span>)
    }

    const startIndex = currentPage === totalPages ? Math.max(2, totalPages - 2) : Math.max(2, currentPage - 1)
    const endIndex = currentPage === 1 ? Math.min(3, totalPages - 1) : Math.min(currentPage + 1, totalPages -1)

    for (let i = startIndex; i <= endIndex; i++) {
        pageLinks.push(generateLinkItem(i))
    }

    if (totalPages > 4 && currentPage < totalPages - 2) {
        pageLinks.push(<span key={"list-min-2"}>...</span>)
    }

    if (totalPages > 1) {
        pageLinks.push(generateLinkItem(totalPages))
    }

    return <>
        <div className={styles.pages_nav}>
            <span>Page: </span>
            {pageLinks}
        </div>
    </>
}