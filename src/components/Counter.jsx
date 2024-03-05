"use client"

import { useCount } from "@/hooks/useCount";
import ButtonFill from "./ui/ButtonFill";
import { useCartContext } from "./context/CartContext";
import { useRouter } from "next/navigation";
import { useAuthContext } from "./context/AuthContext";

export const Counter = ({ product, toast }) => {
    const { count, decrement, increment } = useCount(0, 0, product.stock);
    const { addToCart, isInCart } = useCartContext();
    const { user } = useAuthContext();
    const router = useRouter();

    const handleOnClick = () => {

        if (user.logged === false) {
            router.push('/login');
            return
        }

        if (isInCart(product.id)) {
            toast("The products is already in the cart")
            return;
        }

        if (count > 0) {
            addToCart({ ...product, qty: count });
            router.push('/cart');
        }
        else {
            toast("The count is in 0");
        }
    }

    return (
        <div className="w-full  flex flex-col gap-6">
            <div className="flex bg-slate-700 h-12 rounded-md">
                <button className="w-12 rounded-md hover:bg-slate-600" onClick={decrement}>-</button>
                <p className="text-center self-center flex-grow w-20">{count}</p>
                <button className="w-12 rounded-md hover:bg-slate-600" onClick={increment}>+</button>
            </div>
            <ButtonFill onClick={handleOnClick}>
                Add to cart
            </ButtonFill>
        </div>
    )
} 