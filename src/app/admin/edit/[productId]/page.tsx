import CreateForm from "@/components/admin/CreateForm";
import { getProduct } from "@/services/products/productsService";

export async function generateMetadata({ params, searchParams }, parent) {
    const { productId } = await params;
    const product = await getProduct(productId);
    return {
        title: `Edit ${product.title}`,
        description: product.description
    }
}

interface Props {
    productId: string;
}

export default async function page({ params }: {params: Promise<Props>} ) {

    const { productId } = await params;
    const product = await getProduct(productId);

    return (
        <main className="create-product">
            <div className="container-space">
                <h2 className="text-4xl">Edit product</h2>
                <CreateForm type={'edit'} product={product} />
            </div>
        </main>
    )
}
