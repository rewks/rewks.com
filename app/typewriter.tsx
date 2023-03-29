import Script from 'next/script'

export default function TypeWriter({
    className,
    id,
    text,
}:{
    className: string,
    id: string,
    text: string,
}) {
    return <>
    <Script id="type-writer">{`
            const text = "` + text + `";
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    document.getElementById("` + id + `").innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 75);
                }
            }
            document.onload = typeWriter();
        `}</Script>
        <span id={id} className={className}></span>
    </>
}