import Image from "next/image"
import Link from "next/link"
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ListContainer({ products, children }) {
    return (
        <div className="bg-neutral-900">
            <div className="container-space">
                <Breadcrumbs category={children} />
                <h1 className="text-2xl font-bold tracking-tight text-white">{children}</h1>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                    {
                        products.map(product => (
                            <Link
                                className="h-72 md:h-56"
                                key={product.id}
                                href={`/products/${product.id}`}>
                                <div className="group relative flex flex-col h-full">
                                    <div className="flex-grow aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md
                                     bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-52">
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={product.thumbnail}
                                            alt={"Imagen de " + product.title}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="">
                                            <h3 className="text-sm text-neutral-300">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {product.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm font-medium text-gray-100">${product.price}</p>
                                    </div>
                                </div>

                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
