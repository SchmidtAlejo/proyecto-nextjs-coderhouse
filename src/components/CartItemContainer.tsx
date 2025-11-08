"use client";

import Back from "@/components/Back";
import { useCartContext } from "../context/CartContext";
import ButtonFill from "./ui/ButtonFill";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { createOrder } from "@/services/orders/ordersService";
import { CreateOrderRequest } from "@/utils/interface";

export default function CartItemContainer() {

  const { cart, emptyCart, total } = useCartContext();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleOnBuy = async () => {

    const body: CreateOrderRequest = {
      uid: user.uid,
      cart,
      total,
    };

    try {
      setIsLoading(true);
      const { order: orderId } = await createOrder(body);
      emptyCart();
      setIsLoading(false);
      router.push(`/cart/purchase/${orderId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {
        !isLoading ?
          <>
            <div className="mx-auto mt-12 flex flex-col gap-y-4 rounded-md bg-neutral-800 p-6">
              {cart.length > 0 ?
                cart.map(cartItem => (
                  <CartItem cartItem={cartItem} key={cartItem.id} />
                )) : <p className="text-center text-2xl">The cart is empty</p>}
            </div>
            <div className="mt-6 flex flex-col gap-y-4">
              <ButtonFill disabled={cart.length === 0} onClick={handleOnBuy} ariaLabel={"Buy"}>
                                Buy
              </ButtonFill>
              <ButtonFill onClick={emptyCart} className={"bg-red-500 hover:bg-red-400"} ariaLabel={"Empty Cart"}>
                                Empty Cart
              </ButtonFill>
            </div>
            <Back className="mt-6" />
          </>

          : <h2 className="mt-12 text-center text-3xl">processing purchase...</h2>
      }
    </>
  );
}
