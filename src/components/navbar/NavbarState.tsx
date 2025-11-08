"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import CartWidget from "./CartWidget";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CategoryListNavbar from "./CategoryListNavbar";
import { useAuthContext } from "../../context/AuthContext";

export default function NavbarState() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpenCategoryList, setIsOpenCategoryList] = useState<boolean>(false);

  const navBar = useRef(null);

  const { role } = useAuthContext();

  useEffect(() => {
    if (toggleMenu) {
      navBar.current.classList.replace("top-[-136px]", "top-20");
    }
    else {
      navBar.current.classList.replace("top-20", "top-[-136px]");
    }
  }, [toggleMenu]);

  const onClickMenuButton = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setIsOpenCategoryList(false);
    setToggleMenu(false);
  };

  const onResize = () => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <>
      <div className="relative z-50 flex w-full flex-row items-center justify-between bg-neutral-800 px-3 py-2 md:w-auto md:px-0">
        <Link href={"/"} aria-label="Home">
          <Image className="transition-3 hover:scale-105" src={logo} alt="logo" />
        </Link>
        <button className="navbar-toggler md:hidden" onClick={onClickMenuButton} aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
      </div>
      <div className="item fixed left-0 top-[-136px] w-full justify-between bg-neutral-800 md:static md:top-auto md:flex" id="navBar" ref={navBar}>
        <ul className="transition-3 mx-auto flex flex-col items-center gap-x-4 gap-y-3 text-center md:flex-row">
          <li className="nav-item size-full">
            <CategoryListNavbar
              isOpenCategoryList={isOpenCategoryList}
              setIsOpenCategoryList={setIsOpenCategoryList}
              closeMenu={closeMenu}
            />
          </li>
          <li className="nav-item">
            <Link
              href={"/about-us"}
              className="nav-link block w-max text-center"
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
          className="cart-widget my-3 flex cursor-pointer items-center justify-center gap-x-2 md:justify-end  md:pr-[10px]">
          <CartWidget closeMenu={closeMenu} />
        </div>
      </div>
    </>
  );
}
