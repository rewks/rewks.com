import Image from 'next/image'
import { dm_mono } from './fonts'

export default function Home() {
    return (
        <>
            <main className="grid gap-y-8 gap-x-4 overflow-visible text-center mt-10vh">
                <div className="col-start-1 col-end-4 text-5xl text-black dark:text-dark-primary">
                    Cyber Security Professional
                </div>
                <div className="col-start-1 col-end-4 text-2xl">
                    I hack things to protect them but I also sometimes build things either to help my work or just as a hobby. I have a tendency to flit from one interesting tech subject to the next, and sometimes I&apos;ll even write about it.
                </div>
                <div className={["col-start-1 col-end-4 mt-4 mb-12 static", dm_mono.className].join(" ")}>
                    <span className="font-medium">admin@rewks.com</span>:<span className="font-medium">~</span>$&nbsp;<span className="border-solid border-r-4">echo &apos;Hello, World!&apos;</span>
                </div>
            </main>
        </>
    )
}