import styles from './footer.module.css'
import SocialIcon from './socialIcons'

export default function Footer() {
    return <>
    <div className={styles.footer_container}>
        <footer>
            <div className={styles.social_icons_container}>
                <span className={styles.social_icon}>
                    <SocialIcon name="email" href="mailto:contact@rewks.com" size="28" colour="var(--primary)" />
                </span>
                <span className={styles.social_icon}>
                    <SocialIcon name="github" href="https://github.com/rewks" size="28" colour="var(--primary)" />
                </span>
                <span className={styles.social_icon}>
                    <SocialIcon name="twitter" href="https://twitter.com/rewks3" size="28" colour="var(--primary)" />
                </span>
                <span className={styles.social_icon}>
                    <SocialIcon name="facebook" href="https://www.facebook.com/profile.php?=373534832373" size="28" colour="var(--primary)" />
                </span>
                <span className={styles.social_icon}>
                    <SocialIcon name="rss" href="/api/rss" size="26" colour="var(--primary)" />
                </span>
            </div>
            <div className={styles.footer_text_container}>
                <span>rewks.com</span>
                <span>•</span>
                <span>&#169; 2023</span>
                <span>•</span>
                <span>Forever a WIP</span>
            </div>
        </footer>
    </div>
    </>
}