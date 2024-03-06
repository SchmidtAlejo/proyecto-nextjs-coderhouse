import Image from "next/image";
import ButtonFill from "../ui/ButtonFill";
import { getProducts } from "@/services/products/productsService";
import Link from "next/link";
const API_URL = process.env.NEXT_URL_DEV;

export default async function ProductsTable() {
    const items = await getProducts("all products", API_URL);

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
                <thead className="text-xs opacity-70 uppercase">
                    <tr>
                        <th scope="col" className="px-3 py-2">Image</th>
                        <th scope="col" className="px-3 py-2">Name</th>
                        <th scope="col" className="px-3 py-2">Price</th>
                        <th scope="col" className="px-3 py-2">Stock</th>
                        <th scope="col" className="px-3 py-2">ID</th>
                        <th scope="col" className="px-3 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id}>
                                <td className="p-2"><Image src={item.thumbnail} alt={item.title} width={100} height={100} className="w-12 h-12 object-cover rounded-sm" /></td>
                                <td className="p-2">{item.title}</td>
                                <td className="p-2">{item.price}</td>
                                <td className="p-2">{item.stock}</td>
                                <td className="p-2">{item.id}</td>
                                <td className="p-2"><Link href={`/admin/edit/${item.id}`}><ButtonFill>Edit</ButtonFill></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
