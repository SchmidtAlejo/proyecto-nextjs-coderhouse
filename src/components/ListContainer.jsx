import { getProducts } from "@/services/products/productsService";
import Image from "next/image"
import Link from "next/link"

export default async function ListContainer({ category }) {

    const products = await getProducts(category);
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {
                products.map(product => (
                    <Link
                        className="h-72 md:h-56"
                        key={product.id}
                        href={`/products/${product.id}`}
                        aria-label={product.title}
                        rel="noopener noreferrer">
                        <div className="group relative flex flex-col h-full">
                            <div className="flex-grow aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md
                                     bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-52">
                                <Image
                                    width={300}
                                    height={200}
                                    src={product.thumbnail}
                                    alt={"Imagen de " + product.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    priority={10} />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="">
                                    <h2 className="text-sm text-neutral-300">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {product.title}
                                    </h2>
                                </div>
                                <p className="text-sm font-medium text-gray-100">${product.price}</p>
                            </div>
                        </div>

                    </Link>
                ))
            }
        </div>
    )
}
