import Image from "next/image";
import React from "react";
import { useCartContext } from "../context/CartContext";
import {CartItem as CartItemInterface} from "@/utils/interface";

interface Props {
    cartItem: CartItemInterface
}

export default function CartItem({ cartItem }: Props) {

  const { removeItem } = useCartContext();

  return (
    <div className="flex gap-x-6">
      <div className="my-auto h-24">
        <Image width={1000} height={1000}
          src={cartItem.thumbnail}
          alt={`Imagen de ${cartItem.title}`}
          className="h-full w-32 rounded-md object-cover"
        />
      </div>
      <div className="flex grow basis-0 flex-col justify-between gap-y-4">
        <div className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-4">
          <p>{cartItem.title}</p>
          <p>${cartItem.price}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-4">
          <p className="text-gray-300">Qty {cartItem.qty}</p>
          <button
            className="text-red-500 hover:text-red-400"
            onClick={() => { removeItem(cartItem); }}

          >Remove</button>
        </div>
      </div>
    </div>
  );
}
