import styles from './styles/keyword.module.css'

export default function Keyword({
    text
}:{
    text: string
}) {
    return <>
        <span className={styles.keyword}>{text}</span>
    </>
}