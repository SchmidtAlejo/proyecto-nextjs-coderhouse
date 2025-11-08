"use client";

import { useAuthContext } from "../context/AuthContext";
import Link from "next/link";
import ButtonFill from "./ui/ButtonFill";
import Spinner from "./Spinner";
import useOrders from "@/hooks/useOrders";

export default function OrdersTable() {
  const { user } = useAuthContext();
  const {orders, isLoading} = useOrders({userId: user.uid});

  return (
    <div>
      {
        !isLoading ? <>{
          orders.length > 0 ?
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="text-xs uppercase opacity-70">
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
              <h2 className="mt-12 text-center text-2xl">You don´t have any order</h2>
            </>
        }</> :
          <div className="flex h-80 items-center justify-center">
            <Spinner />
          </div>
      }
    </div>
  );
}
