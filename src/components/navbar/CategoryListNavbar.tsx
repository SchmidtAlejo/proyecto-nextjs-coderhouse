"use client";

import { capitalLeterHelper } from "@/utils/capitalLeterHelper";
import { categories } from "@/data/categories";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface Params {
    isOpenCategoryList: boolean;
    setIsOpenCategoryList: Dispatch<SetStateAction<boolean>>;
    closeMenu: () => void;
}

export default function CategoryListNavbar({ isOpenCategoryList, setIsOpenCategoryList, closeMenu }: Params) {

  const categoryList = useRef(null);
  useEffect(() => {
    if (isOpenCategoryList) {
      categoryList.current.classList.replace("max-h-0", "max-h-[200px]");
      categoryList.current.classList.replace("z-[-10]", "z-auto");
    }
    else {
      categoryList.current.classList.replace("max-h-[200px]", "max-h-0");
      categoryList.current.classList.replace("z-auto", "z-[-10]");
    }
  }, [isOpenCategoryList]);

  const isOpenCategoryListList = () => {
    setIsOpenCategoryList(!isOpenCategoryList);
  };

  return (
    <div
      className="category-list nav-link flex h-full flex-col items-center text-center"
      onClick={isOpenCategoryListList}>
      <div className="my-auto flex cursor-pointer items-center justify-center gap-x-1">
        <p>Products</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className={`bi bi-chevron-down transition-3 ${isOpenCategoryList ? "rotate-180 md:rotate-0" : ""}`} viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
        </svg>
      </div>
      <ul
        className="transition-3 max-h-0 w-full overflow-auto bg-zinc-800 pr-0 md:absolute md:-z-10 md:max-h-96 md:w-1/2 md:max-w-[600px] md:translate-x-16 md:rounded-b-md"
        ref={categoryList}
      >
        {
          categories.map(
            category => (
              <li key={category} className="w-full text-white hover:bg-neutral-700 hover:text-neutral-300">
                <Link
                  className="inline-block size-full py-2"
                  href={`/products/category/${category}`}
                  onClick={closeMenu}
                  aria-label={category}>
                  {capitalLeterHelper(category)}
                </Link>
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}
