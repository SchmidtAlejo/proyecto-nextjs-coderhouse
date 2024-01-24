import ButtonFill from "@/components/ui/ButtonFill";
import products from "@/data/products"
import Image from "next/image";
import Link from "next/link";
import Back from "@/components/Back";

export const metadata = {
    title: "Cart",
    description: "Cart"
}

export default function page() {

    const product = products[0];

    console.log(product);

    return (
        <main className="">
            <div className="container-space">
                <h1 className="text-4xl">Cart</h1>
                <div className="mt-12 bg-neutral-800 p-6 rounded-md mx-auto">
                    <div className="flex gap-x-6">
                        <div className="w-48 h-24 my-auto">
                            <Image width={1000} height={1000}
                                src={product.thumbnail}
                                priority={1}
                                alt={`Imagen de ${product.title}`}
                                className="h-full w-fit"
                            />
                        </div>
                        <div className="flex flex-col justify-between flex-grow gap-y-4">
                            <div className="flex flex-row justify-between gap-x-6 gap-y-4 flex-wrap">
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                            </div>
                            <div className="flex flex-row justify-between gap-x-6 gap-y-4 flex-wrap">
                                <p className="text-gray-300">Qty 1</p>
                                <button className="text-red-500">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <Link href={'/cart/purchase'}>
                        <ButtonFill>
                            Buy
                        </ButtonFill>
                    </Link>
                </div>
                <Back className="mt-6"/>
            </div>
        </main>
    )
}
