import { Counter } from "@/components/Counter";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import products from "@/data/products";
import Image from "next/image";

export async function generateMetadata({params, searchParams}, parent) {
    const product = products.find(product => product.id === parseInt(params.productId));
    return {
        title: product.title,
        description: product.description
    }
}

export default function page({ params }) {

    const product = products.find(product => product.id === parseInt(params.productId));

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
                            className="rounded-lg h-full w-fit"
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
