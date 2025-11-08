import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";

export const metadata = {
  title: "Admin",
  description: "Admin page"
};

export default function page() {
  return (
    <main>
      <div className="container-space">
        <div className="flex items-center justify-between">
          <h2 className="mb-6 text-4xl">Products</h2>
          <Link className="text-lg hover:text-neutral-300" href={"/admin/create"} aria-label="Add to cart" rel="noopener noreferrer">Add Product</Link>
        </div>
        <ProductsTable />
      </div>
    </main>
  );
}
