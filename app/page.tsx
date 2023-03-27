import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            <div className={styles.main_container}>
                <div className={styles.profile_picture}>
                    pic
                </div>
                <div className={styles.blurb_text}>
                    about me blah blah
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