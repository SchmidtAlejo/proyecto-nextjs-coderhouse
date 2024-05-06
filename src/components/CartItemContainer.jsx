'use client'

import Back from "@/components/Back";
import { useCartContext } from "../context/CartContext";
import ButtonFill from "./ui/ButtonFill";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { createOrder } from "@/services/orders/ordersService";

export default function CartItemContainer() {

    const { cart, emptyCart, total } = useCartContext();
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleOnBuy = async () => {

        const body = {
            uid: user.uid,
            cart,
            total,
        }

        try {
            setIsLoading(true);
            const { order: orderId } = await createOrder(body);
            emptyCart();
            setIsLoading(false);
            router.push(`/cart/purchase/${orderId}`);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {
                !isLoading ?
                    <>
                        <div className="mt-12 bg-neutral-800 p-6 rounded-md mx-auto flex flex-col gap-y-4">
                            {cart.length > 0 ?
                                cart.map(cartItem => (
                                    <CartItem cartItem={cartItem} key={cartItem.id} />
                                )) : <p className="text-2xl text-center">The cart is empty</p>}
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

                    : <h2 className="mt-12 text-center text-3xl">processing purchase...</h2>
            }
        </>
    )
}
