import { Counter } from "@/components/Counter";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getProduct } from "@/services/products/productsService";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';

export async function generateMetadata({ params, searchParams }, parent) {
    const { productId } = await params;
    const product = await getProduct(productId);
    return {
        title: product.title,
        description: product.description
    }
}

export default async function page({ params }) {

    const { productId } = await params;
    const product = await getProduct(productId);

    return (
        <main className="product-detail">
            <div className="container-space">
                <Breadcrumbs category={product.category} productTitle={product.title} />
                <div className="mx-auto flex flex-col md:flex-row gap-12">
                    <div className="h-96 w-full flex-grow-[8] basis-1 self-center flex justify-center">
                        <Image
                            src={product.images[0]}
                            width={1000}
                            height={1000}
                            className="rounded-lg h-full w-fit object-cover"
                            alt={`Image of ${product.title}`}
                        />
                    </div>
                    <div className=" flex flex-col gap-y-6 flex-grow-[4] basis-1">
                        <h1 className="text-4xl">{product.title}</h1>
                        <h2 className="text-3xl">${product.price}</h2>
                        <p className="text-lg">{product.description}</p>
                        <Counter product={product} toast={toast} />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </main>
    )
}
