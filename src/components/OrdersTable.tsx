"use client"

import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import Link from "next/link";
import ButtonFill from "./ui/ButtonFill";
import Spinner from "./Spinner";
import useOrders from "@/hooks/useOrders";

export default function OrdersTable() {
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const {orders} = useOrders({userId: user.uid});

    return (
        <div>
            {
                !isLoading ? <>{
                    orders.length > 0 ?
                        <div className="overflow-x-auto mt-12">
                            <table className="w-full text-xs text-left">
                                <thead className="text-xs opacity-70 uppercase">
                                    <tr>
                                        <th scope="col" className="px-3 py-2">ID</th>
                                        <th scope="col" className="px-3 py-2">Total</th>
                                        <th scope="col" className="px-3 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => (
                                            <tr key={order.id}>
                                                <td className="p-2">{order.id}</td>
                                                <td className="p-2">${order.total}</td>
                                                <td className="p-2">
                                                    <Link href={`/account/orders/${order.id}`} aria-label="Details" rel="noopener noreferrer">
                                                        <ButtonFill ariaLabel={"Details"}>Details</ButtonFill>
                                                    </Link></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <>
                            <h2 className="text-2xl mt-12 text-center">You don´t have any order</h2>
                        </>
                }</> :
                    <div className="flex justify-center items-center h-80">
                        <Spinner />
                    </div>
            }
        </div>
    )
}
