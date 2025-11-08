import { Counter } from "@/components/Counter";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getProduct } from "@/services/products/productsService";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

interface Params {
    productId: string
}

export async function generateMetadata({ params }: {params: Promise<Params>}) {
  const { productId } = await params;
  const product = await getProduct(productId);
  return {
    title: product.title,
    description: product.description
  };
}

export default async function page({ params }: {params: Promise<Params>}) {

  const { productId } = await params;
  const product = await getProduct(productId);

  return (
    <main className="product-detail">
      <div className="container-space">
        <Breadcrumbs category={product.category} productTitle={product.title} />
        <div className="mx-auto flex flex-col gap-12 md:flex-row">
          <div className="flex h-96 w-full grow-[8] basis-1 justify-center self-center">
            <Image
              src={product.images[0]}
              width={1000}
              height={1000}
              className="h-full w-fit rounded-lg object-cover"
              alt={`Image of ${product.title}`}
            />
          </div>
          <div className=" flex grow-[4] basis-1 flex-col gap-y-6">
            <h1 className="text-4xl">{product.title}</h1>
            <h2 className="text-3xl">${product.price}</h2>
            <p className="text-lg">{product.description}</p>
            <Counter product={product} toast={toast} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
