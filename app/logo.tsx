'use client';

export default function Logo({ width, height 
}: { 
    width: string,
    height: string
}) {
    return <>
        <style jsx>{`
            #top {
                fill: url(#grad1);
            }

            #mid {
                fill: url(#grad1);
            }

            #bot {
                fill: url(#grad1);
            }
        `}</style>

        <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00b6ec" />
                    <stop offset="40%" stopColor="#a5d4d4" />
                    <stop offset="60%" stopColor="#ffb853" />
                    <stop offset="100%" stopColor="#e27a00" />
                </linearGradient>
            </defs>
            <g id="logo">
                <path id="top" d="M9.15004 54.429C8.83333 54.4627 8.56626 54.1956 8.59995 53.8789L9.37626 46.5816L46.5835 9.37432L53.8808 8.59801C54.1975 8.56432 54.4646 8.83138 54.4309 9.1481L53.6546 16.4454L16.4473 53.6527L9.15004 54.429Z"/>
                <path id="mid" d="M4.65363 95.8965C4.33692 95.9301 4.06985 95.6631 4.10355 95.3464L5.72165 80.1362L80.1362 5.72164L95.3464 4.10354C95.6631 4.06985 95.9301 4.33692 95.8965 4.65363L94.2784 19.8638L19.8638 94.2783L4.65363 95.8965Z"/>
                <path id="bot" d="M46.12 91.399C45.8033 91.4327 45.5363 91.1656 45.57 90.8489L46.3463 83.5516L83.5535 46.3443L90.8508 45.568C91.1675 45.5343 91.4346 45.8014 91.4009 46.1181L90.6246 53.4154L53.4173 90.6227L46.12 91.399Z"/>
            </g>
        </svg>
    </>
}