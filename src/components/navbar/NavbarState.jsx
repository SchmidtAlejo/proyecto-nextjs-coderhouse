"use client"

import Image from "next/image"
import logo from "../../assets/logo.png"
import CartWidget from "./CartWidget"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import CategoryListNavbar from "./CategoryListNavbar"
import { useAuthContext } from "../../context/AuthContext"

export default function NavbarState() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCategory, setToggleCategory] = useState(false);

    const navBar = useRef(null);

    const { role } = useAuthContext();

    const onResize = () => {
        if (typeof window !== 'undefined' && window.innerWidth > 768) {
            closeMenu()
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    })

    useEffect(() => {
        if (toggleMenu) {
            navBar.current.classList.replace('top-[-136px]', 'top-20');
        }
        else {
            navBar.current.classList.replace('top-20', 'top-[-136px]');
            closeCategoryList();
        }
    }, [toggleMenu])

    const onClickMenuButton = () => {
        toggleMenu ?
            setToggleMenu(false) :
            setToggleMenu(true);
    }

    const closeCategoryList = () => {
        setToggleCategory(false);
    }

    const closeMenu = () => {
        setToggleCategory(false);
        setToggleMenu(false);
    }

    return (
        <>
            <div className="px-3 md:px-0 flex flex-row justify-between items-center relative z-50 py-2 bg-neutral-800 w-full md:w-auto">
                <Link href={"/"} aria-label="Home">
                    <Image className="hover:scale-105 transition-3" src={logo} alt="logo" priority={1} />
                </Link>
                <button className="navbar-toggler md:hidden" onClick={onClickMenuButton} aria-label="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
            </div>
            <div className="fixed left-0 top-[-136px] bg-neutral-800 md:flex w-full md:static md:top-auto justify-between item" id="navBar" ref={navBar}>
                <ul className="flex flex-col md:flex-row text-center items-center gap-x-4 gap-y-3 transition-3 mx-auto">
                    <li className="nav-item h-full w-full">
                        <CategoryListNavbar
                            toggleCategory={toggleCategory}
                            closeCategoryList={closeCategoryList}
                            setToggleCategory={setToggleCategory}
                            closeMenu={closeMenu}
                        />
                    </li>
                    <li className="nav-item">
                        <Link
                            href={"/about-us"}
                            className="nav-link text-center block w-max"
                            onClick={closeMenu}
                            aria-label="About us">
                            About us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={"/contact"}
                            className="nav-link text-center"
                            onClick={closeMenu}
                            aria-label="Contact">
                            Contact
                        </Link>
                    </li>
                    {
                        role === "admin" && (
                            <li className="nav-item">
                                <Link
                                    href={"/admin"}
                                    className="nav-link text-center"
                                    onClick={closeMenu}
                                    aria-label="Admin">
                                    Admin
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <div
                    className="flex items-center justify-center md:justify-end gap-x-2 md:pr-[10px] cursor-pointer cart-widget  my-3">
                    <CartWidget closeMenu={closeMenu} />
                </div>
            </div>
        </>
    )
}
