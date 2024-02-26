import LogoutButton from "@/components/admin/LogoutButton";
import ProductsTable from "@/components/admin/ProductsTable";

export default function page() {
    return (
        <main>
            <div className="container-space">
                <h2 className="text-4xl mb-6">Products</h2>
                <ProductsTable />
                <div className="w-32 mt-12 mx-auto">
                    <LogoutButton />
                </div>
            </div>
        </main>
    )
}
