import styles from './page.module.css'
import { DM_Mono } from 'next/font/google'
import Image from 'next/image'

const dm_mono = DM_Mono({ weight: ['400', '500'], subsets: ['latin']})

export default function Home() {
    return (
        <main className={styles.main_container}>
            <div className={styles.avatar_container}>
                <Image
                    src="/root/synth-avatar.png"
                    alt="A.I generated art of the author"
                    width={1280 / 5}
                    height={1280 / 5}
                    quality={100}
                    priority
                    className={styles.avatar}
                />
            </div>
            <div className={styles.title_container}>
                Cyber Security Professional
            </div>
            <div className={styles.blurb_container}>
                I hack things to protect them but I also sometimes build things either to help my work or just as a hobby. I have a tendency to flit from one interesting tech subject to the next, and sometimes I&apos;ll even write about it.
            </div>
            <div className={[styles.console_container, dm_mono.className].join(" ")}>
                <span className={styles.console_user}>admin@rewks.com</span>:<span className={styles.console_path}>~</span>$&nbsp;<span className={styles.console_cmd}>echo &apos;Hello, World!&apos;</span>
            </div>
        </main>
    )
}