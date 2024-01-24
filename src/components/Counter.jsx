"use client"

import { useCount } from "@/hooks/useCount";
import ButtonFill from "./ui/ButtonFill";
import Link from "next/link";

export const Counter = ({ product }) => {
    const { count, decrement, increment } = useCount(0, 0, product.stock);

    return (
        <div className="w-full  flex flex-col gap-6">
            <div className="flex bg-slate-700 h-12 rounded-md">
                <button className="w-12 rounded-md hover:bg-slate-600" onClick={decrement}>-</button>
                <p className="text-center self-center flex-grow w-20">{count}</p>
                <button className="w-12 rounded-md hover:bg-slate-600" onClick={increment}>+</button>
            </div>

            <Link href={"/cart"}>
                <ButtonFill>
                    Add to cart
                </ButtonFill>
            </Link>
        </div>
    )
} 