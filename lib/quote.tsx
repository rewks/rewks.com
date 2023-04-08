import styles from './quote.module.css'

export default function Quote({
    text, 
    author
}:{
    text: string,
    author: string,
}) {
    return (
        <div className={styles.quote}>
            <p style={{ fontStyle: 'italic' }}>
                {text}
            </p>
            <p style={{ textAlign: 'right' }}>
                - {author}
            </p>
        </div>
    )
}