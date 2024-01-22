import ListContainer from "@/components/ListContainer"
import products from "@/data/products"

export default function page() {
    return (
        <main className="categoria ">
            <ListContainer products={products}/>
        </main>
    )
}
