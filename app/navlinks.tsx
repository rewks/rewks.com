import Link from 'next/link'

export default function NavLinks() {
    return <>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
    </>
}