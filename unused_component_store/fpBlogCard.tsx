import styles from './fpBlogCard.module.css'
import Image from 'next/image'

export default function FPBlogCard({
    index
}:{
    index: number,
}) {
    return <>
        <div className={styles.card}>
            <div className={styles.bp_image}>
                <Image
                    src="/../public/root/woman-asian-temples.png"
                    alt="A.I generated art of the author"
                    width={1280 / 5}
                    height={150}
                    priority
                    />
            </div>
            <div className={styles.bp_title}>
                Automating a simple Velociraptor deployment in AWS (Part 1)
            </div>
            <div className={styles.bp_tags_container}>
                <span>hacking</span>
                <span>sql injection</span>
                <span>automation</span>
                <span>automation</span>
            </div>
            <div className={styles.bp_date}>
                Posted on: 29-03-2088
            </div>
        </div>
    </>
}