'use client'

import { useState } from 'react'

export default function MobileNav() {
    const [navShowing, setNavShowing] = useState(false);

    const toggleNav = () => {
        setNavShowing(!navShowing);
    }

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

        .mobile_nav_menu {
            position: fixed;
            top: 0;
            left: 0;
            background-color: var(--mobile-nav);
            width: 100vh;
            height: 100vh;
            z-index: 1;
            translate: ${ navShowing ? "0" : "100vw" };
            display: ${ navShowing ? "block" : "none" };
        }

        @media only screen and (max-width: 680px) {
            .mobile_nav {
                display: flex;
            }
        }
    `}</style>
        <div className="mobile_nav">
            <button type="button" onClick={() => toggleNav()}>
                <svg width="32" height="32" fill="var(--primary)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="mobile_nav_menu">
                HELLO
                <button type="button" onClick={() => toggleNav()}>
                    <svg width="32" height="32" fill="var(--primary)" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                    </svg>
                </button>
            </div>
        </div>
    </>
}