import CreateForm from "@/components/admin/CreateForm";
import { getProduct } from "@/services/products/productsService";
const API_URL = process.env.NEXT_URL_DEV;

export async function generateMetadata({ params, searchParams }, parent) {
    const product = await getProduct(params.productId, API_URL);
    return {
        title: `Edit ${product.title}`,
        description: product.description
    }
}

export default async function page({ params, searchParams }, parent) {

    const product = await getProduct(params.productId, API_URL);

    return (
        <main className="create-product">
            <div className="container-space">
                <h2 className="text-4xl">Edit product</h2>
                <CreateForm URL={API_URL} type={'edit'} product={product} />
            </div>
        </main>
    )
}
