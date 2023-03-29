'use client'

export default function MobileNav() {
    return <>
    <style jsx>{`
        .mobile_nav {
            display: none;
            margin-right: 0.5rem;
        }

        .mobile_nav button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }

        @media only screen and (max-width: 680px) {
            .mobile_nav {
                display: flex;
            }
        }
    `}</style>
        <div className="mobile_nav">
            <button type="button">
                <svg width="32" height="32" fill="var(--primary)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </>
}