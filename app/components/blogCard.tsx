import styles from './styles/blogCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({
    slug,
    meta,
}:{
    slug: string,
    meta: { [x: string] : unknown },
}) {
    const title = meta.title as string
    const date = meta.date as string
    const description = meta.description as string
    const image = meta.image as string
    const tags = meta.tags as string[]

    return <>
        <Link
            href={`blog/${slug}`}
        >
            <div className={styles.card}>
                <Image
                    src={image}
                    alt="Cover image for the blog post"
                    width={1280 / 6}
                    height={1280 / 6}
                    priority
                    className={styles.bp_image}
                />
                <div className={styles.bp_details}>
                    <div className={styles.bp_title}>
                        {title}
                    </div>
                    <div className={styles.bp_date}>
                        Posted on {date}
                    </div>
                    <div className={styles.bp_description}>
                        {description}
                    </div>
                    <div className={styles.bp_tags_container}>
                        {tags.map(tag => <span key={tag}> {tag} </span>)}
                    </div>
                </div>
            </div>
        </Link>
    </>
}