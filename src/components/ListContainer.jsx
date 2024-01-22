import Image from "next/image"

export default function ListContainer({ products }) {
    return (
        <div class="bg-neutral-900">
            <div class="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-white">Todos los productos</h2>

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                    {
                        products.map(product => (
                            <div>
                                <div class="group relative flex flex-col h-full">
                                    <div class="flex-grow aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-52">
                                        <Image width={1000} height={1000} src={product.thumbnail} alt={"Imagen de " + product.title} class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                    </div>
                                    <div class="mt-4 flex justify-between">
                                        <div className="">
                                            <h3 class="text-sm text-neutral-300">
                                                <a href="#">
                                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                                    {product.title}
                                                </a>
                                            </h3>
                                        </div>
                                        <p class="text-sm font-medium text-gray-100">${product.price}</p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
