import LogoutButton from "@/components/ui/LogoutButton";
import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";

export const metadata = {
    title: "Admin",
    description: "Admin page"
}

export default function page() {
    return (
        <main>
            <div className="container-space">
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl mb-6">Products</h2>
                    <Link className="text-lg hover:text-neutral-300" href={'/admin/create'} aria-label="Add to cart" rel="noopener noreferrer">Add to cart</Link>
                </div>
                <ProductsTable />
            </div>
        </main>
    )
}
