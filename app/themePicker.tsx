
'use client';

export default function themePicker() {
    return <>
        <style jsx>{`
            #center {
                fill: var(--primary);

            }

            #flame {
                fill: var(--primary);

            }
        `}</style>
        <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle id="center" cx="12" cy="12" r="5"/>
            <path id="flame" d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"/>
            <path id="flame" d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z"/>
            <path id="flame" d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z"/>
            <path id="flame" d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z"/>
            <path id="flame" d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z"/>
            <path id="flame" d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z"/>
            <path id="flame" d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z"/>
            <path id="flame" d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z"/>
        </svg>
    </>
}