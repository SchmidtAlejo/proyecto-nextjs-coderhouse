'use client'

import Back from "@/components/Back";
import { useCartContext } from "./context/CartContext";
import ButtonFill from "./ui/ButtonFill";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";

export default function CartItemContainer() {

    const { cart, emptyCart, buy } = useCartContext();

    const router = useRouter();

    const handleOnBuy = () => {
        if (cart.length === 0) {
            console.log("the cart is empty");
            return
        }
        buy();
        router.push("/cart/purchase");
    }

    console.log(cart);

    return (
        <>
            <div className="mt-12 bg-neutral-800 p-6 rounded-md mx-auto flex flex-col gap-y-4">
                {cart.length > 0 ?
                    cart.map(cartItem => (
                        <CartItem cartItem={cartItem} key={cartItem.id} />
                    ))
                    : <p className="text-2xl text-center">The cart is empty</p>}
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
                <ButtonFill disabled={cart.length === 0} onClick={handleOnBuy}>
                    Buy
                </ButtonFill>
                <ButtonFill onClick={emptyCart} className={"bg-red-500 hover:bg-red-400"}>
                    Empty Cart
                </ButtonFill>
            </div>
            <Back className="mt-6" />
        </>
    )
}
