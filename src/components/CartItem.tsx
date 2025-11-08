import Image from 'next/image'
import React from 'react'
import { useCartContext } from '../context/CartContext';
import {CartItem as CartItemInterface} from "@/utils/interface"

interface Props {
    cartItem: CartItemInterface
}

export default function CartItem({ cartItem }: Props) {

    const { removeItem } = useCartContext();

    return (
        <div className="flex gap-x-6">
            <div className="h-24 my-auto">
                <Image width={1000} height={1000}
                    src={cartItem.thumbnail}
                    alt={`Imagen de ${cartItem.title}`}
                    className="h-full w-32 object-cover rounded-md"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow basis-0 gap-y-4">
                <div className="flex flex-row justify-between gap-x-6 gap-y-4 flex-wrap">
                    <p>{cartItem.title}</p>
                    <p>${cartItem.price}</p>
                </div>
                <div className="flex flex-row justify-between gap-x-6 gap-y-4 flex-wrap">
                    <p className="text-gray-300">Qty {cartItem.qty}</p>
                    <button
                        className="text-red-500 hover:text-red-400"
                        onClick={() => { removeItem(cartItem) }}

                    >Remove</button>
                </div>
            </div>
        </div>
    )
}
