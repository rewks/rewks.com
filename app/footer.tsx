import styles from './footer.module.css'
import SocialIcon from './socialIcons'

export default function Footer() {
    return <>
    <footer>
        <div className={styles.social_icons_container}>
            <SocialIcon name="email" href="mailto:contact@rewks.com" size="28" colour="var(--primary)" />
            <SocialIcon name="github" href="https://github.com/rewks" size="28" colour="var(--primary)" />
            <SocialIcon name="twitter" href="https://twitter.com/rewks3" size="28" colour="var(--primary)" />
            <SocialIcon name="facebook" href="https://www.facebook.com/profile.php?=373534832373" size="28" colour="var(--primary)" />
        </div>
    </footer>
    </>
}