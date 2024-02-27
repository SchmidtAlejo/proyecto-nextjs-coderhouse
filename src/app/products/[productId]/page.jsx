import { Counter } from "@/components/Counter";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
const API_URL = process.env.NEXT_URL_PROD;

const getProduct = async (id) => {
    const response = await fetch(`${API_URL}/api/products/${id}`,
        {
            cache: 'no-store'
        });
    if (!response.ok) {
        throw new Error('Error with the request')
    }
    return response.json();
}

export async function generateMetadata({ params, searchParams }, parent) {
    const product = await getProduct(params.productId);
    return {
        title: product.title,
        description: product.description
    }
}

export default async function page({ params }) {

    const product = await getProduct(params.productId);

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
                        <Counter product={product} />
                    </div>
                </div>
            </div>
        </main>
    )
}
