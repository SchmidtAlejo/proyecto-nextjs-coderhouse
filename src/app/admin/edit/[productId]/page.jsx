import CreateForm from "@/components/admin/CreateForm";
import { getProduct } from "@/services/products/productsService";

export async function generateMetadata({ params, searchParams }, parent) {
    const product = await getProduct(params.productId);
    return {
        title: `Edit ${product.title}`,
        description: product.description
    }
}

export default async function page({ params, searchParams }, parent) {

    const product = await getProduct(params.productId);

    return (
        <main className="create-product">
            <div className="container-space">
                <h2 className="text-4xl">Edit product</h2>
                <CreateForm type={'edit'} product={product} />
            </div>
        </main>
    )
}
