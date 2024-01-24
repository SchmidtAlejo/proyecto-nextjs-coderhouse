"use client"

import categories from "@/data/categories";
import capitalLeterHelper from "@/helpers/capitalLeterHelper";
import Link from "next/link";
import { useEffect, useRef } from "react";


export default function CategoryListNavbar({ toggleCategory, setToggleCategory, closeMenu }) {

    const categoriesCopy = categories.map(
        category => {
            return {
                name: capitalLeterHelper(category),
                original: category
            };
        }
    )

    const categoryList = useRef(null);

    useEffect(() => {
        if (toggleCategory) {
            categoryList.current.classList.replace('max-h-0', 'max-h-[200px]')
            categoryList.current.classList.replace('z-[-10]', 'z-auto')
        }
        else {
            categoryList.current.classList.replace('max-h-[200px]', 'max-h-0')
            categoryList.current.classList.replace('z-auto', 'z-[-10]')
        }
    }, [toggleCategory])

    const toggleCategoryList = () => {
        toggleCategory ?
            setToggleCategory(false) :
            setToggleCategory(true);
    }

    return (
        <div
            className="category-list h-full nav-link text-center flex flex-col items-center" href="#tienda"
            onClick={toggleCategoryList}>
            <div className="my-auto flex justify-center items-center gap-x-1 cursor-pointer">
                <p>Products</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <ul
                className="md:absolute bg-zinc-800 pr-0 transition-3 w-full md:rounded-b-md md:w-1/2 md:z-[-10] max-h-0 md:max-h-96 overflow-auto"
                ref={categoryList}
            >
                {
                    categoriesCopy.map(
                        category => (
                            <li key={category.name} className="w-full text-white hover:text-neutral-300 hover:bg-neutral-700">
                                <Link
                                    className="inline-block w-full h-full py-2"
                                    href={`/products/category/${category.original}`}
                                    onClick={closeMenu}>
                                    {category.name}
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}
