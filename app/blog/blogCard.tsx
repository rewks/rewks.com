import styles from './blogCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({
    slug,
    meta,
}:{
    slug: string | undefined,
    meta: { [x: string] : unknown } | undefined,
}) {
    if (slug === undefined || meta === undefined) {
        return <></>
    }

    const title = meta.title as string
    const date = meta.date as string
    const description = meta.description as string
    const image = meta.image as string
    const tags = meta.tags as string[]

    return <>
        <Link
            href={`blog/${slug}`}
            key={slug}
        >
            <div className={styles.card}>
                <div className={styles.bp_image}>
                    <Image
                        src={image}
                        alt="A.I generated art of the author"
                        width={1280 / 5}
                        height={1280 / 5}
                        priority
                        />
                </div>
                <div className={styles.bp_title}>
                    {title}
                </div>
                <div className={styles.bp_description}>
                    {description}
                </div>
                <div className={styles.bp_tags_container}>
                    <span>hacking</span>
                    <span>sql injection</span>
                    <span>automation</span>
                    <span>automation</span>
                </div>
                <div className={styles.bp_date}>
                    Posted on: {date}
                </div>
            </div>
        </Link>
    </>
}