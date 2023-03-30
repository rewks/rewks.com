import styles from './page.module.css'
import Image from 'next/image'

export default function About() {
    return <>
        <h1 className={styles.about_slogan}>Hack the planet!</h1>
        <div className={styles.about_container}>
            <Image
                src="/../public/root/woman-asian-temples.png"
                alt="placeholder"
                width={256}
                height={256}
                priority
                className={styles.about_image}
            />
            <div className={styles.about_text}>
                <p>
                    I'm rewks, a cyber security professional who has been involved in both red and blue sides of the industry since early 2019 though my interest in security as a hobby predates that. I currently work as a consultant penetration tester in the UK, and although I don't approach certifications like Ash Ketchum does Pokemon, I have attained CRTO, CRT, CPSA, OSCP, eCPPTv2 and Sec+.
                </p>
                <p>
                    I enjoy learning about new stuff, perhaps too much as I can easily find myself hopping from one subject to the next on a weekly basis. So whilst the main focus of my blog posts will probably be security related, other subjects may also feature.
                </p>
            </div>
        </div>
        <p className={styles.about_disclaimer}>
            Disclaimer: This site is self made, because it is more interesting than using a generic and bloated platform like medium or wordpress. Also I loathe the amount of tracking, analytics and pop-ups that can be found across most of the internet today - so there will be none of that in any corner I can control (yay!). That said, I am not a professional web developer so keep that in mind.
        </p>
    </>
}