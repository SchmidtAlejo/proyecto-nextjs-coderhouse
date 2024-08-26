import ListContainer from "@/components/ListContainer";
import Spinner from "@/components/Spinner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { capitalLeterHelper } from "@/helpers/capitalLeterHelper";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {

    const validateCategorie = params.category !== "all%20products"

    return {
        title: validateCategorie ? capitalLeterHelper(params.category) : "All products",
        description: `List of ${capitalLeterHelper(params.category)} that are on sale`
    }
}

export function generateStaticParams() {
    return [
        { category: 'all products' },
        { category: 'smartphones' },
        { category: 'laptops' },
        { category: 'fragrances' },
        { category: 'skincare' },
        { category: 'groceries' },
        { category: 'home-decoration' }
    ]
}

export const revalidate = 3600;

export default async function page({ params }) {

    const { category } = params

    const validateCategorie = category !== "all%20products";

    const categoryName = validateCategorie ? capitalLeterHelper(category) : "All products"

    return (
        <main className="category">
            <div className="bg-neutral-900">
                <div className="container-space">
                    <Breadcrumbs category={categoryName} />
                    <h1 className="text-2xl font-bold tracking-tight text-white">{categoryName}</h1>
                    <Suspense fallback={
                        <div className="flex justify-center items-center h-80">
                            <Spinner />
                        </div>
                    }>
                        <ListContainer category={category} />
                    </Suspense>
                </div>
            </div>
        </main>
    )
}
