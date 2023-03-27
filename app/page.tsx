import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
    return (
        <main>
            <div className={styles.main_container}>
                <div className={styles.avatar_container}>
                    <Image
                        src="/../public/root/woman-asian-temples.png"
                        alt="A.I generated art of the author"
                        width={1280/5}
                        height={1280/5}
                        priority
                        className={styles.avatar}
                    />
                </div>
                <div className={styles.blurb_container}>
                    about me blah blah
                </div>
                <div className={styles.console_container}>
                    admin@rewks.com:~$ cd ~
                </div>
                <div className={styles.blog_card}>
                    most recent post
                </div>
                <div className={styles.blog_card}>
                    second most recent post
                </div>
                <div className={styles.blog_card}>
                    third most recent post
                </div>
            </div>
        </main>
    )
}