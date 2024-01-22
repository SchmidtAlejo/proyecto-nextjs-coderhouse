"use client"

import Image from "next/image"
import logo from "../assets/logo.webp"
import CartWidget from "./CartWidget"
import { useEffect, useRef, useState } from "react"

export default function NavbarState({children}) {

    const [toggleMenu, setToggleMenu] = useState(false);

    const navBar = useRef(null);

    const onClickMenuButton = () => {
        toggleMenu ?
            setToggleMenu(false) :
            setToggleMenu(true);
    }

    useEffect(() => {
        toggleMenu ?
            navBar.current.classList.replace('top-[-64px]', 'top-20') :
            navBar.current.classList.replace('top-20', 'top-[-64px]');
    }, [toggleMenu])

    return (
        <>
            <div className="px-3 md:px-0 flex flex-row justify-between items-center relative z-50 py-2 md:bg-transparent bg-neutral-800 w-full md:w-auto">
                <a href="#">
                    <Image className="hover:scale-105 transition-transform" src={logo} alt="logo" priority={1}/>
                </a>
                <button className="navbar-toggler md:hidden" onClick={onClickMenuButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
            </div>
            <div className="fixed left-0 top-[-64px] bg-neutral-800 md:bg-transparent md:flex w-full md:relative md:top-auto z-10" id="navBar" ref={navBar}>
                <div style={{ flex: 1 }}></div>
                {
                    children
                }
                <div className="flex items-center justify-center md:justify-end gap-x-2 my-3 md:pr-[10px] cursor-pointer cart-widget" style={{ flex: 1 }}><CartWidget /></div>
            </div>
        </>
    )
}
