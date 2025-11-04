import Back from "@/components/Back";
import { getOrderByOrderId } from "@/services/orders/ordersService";
import Image from "next/image";

export const metadata = {
    title: "Order",
    description: "Order Information"
}

export default async function page({ params, searchParams }, parent) {
    const { orderId } = await params;
    const order = await getOrderByOrderId(orderId);

    return (
        <main>
            <div className="container-space">
                <h1 className="text-md md:text-2xl">Order ID: {orderId}</h1>
                <div className="overflow-x-auto my-12">
                    <table className="w-full text-xs text-left">
                        <thead className="text-xs opacity-70 uppercase">
                            <tr>
                                <th scope="col" className="px-3 py-2">Image</th>
                                <th scope="col" className="px-3 py-2">Name</th>
                                <th scope="col" className="px-3 py-2">Price</th>
                                <th scope="col" className="px-3 py-2">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="p-2"><Image src={item.thumbnail} alt={item.title} width={100} height={100} className="w-12 h-12 object-cover rounded-sm" /></td>
                                        <td className="p-2">{item.title}</td>
                                        <td className="p-2">{item.price}</td>
                                        <td className="p-2">{item.qty}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Back />
            </div>
        </main>
    )
}
