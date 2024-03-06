import CartItemContainer from "@/components/CartItemContainer";
const API_URL = process.env.NEXT_URL_DEV

export const metadata = {
    title: "Cart",
    description: "Cart"
}

export default function page() {
    return (
        <main className="">
            <div className="container-space">
                <h1 className="text-4xl">Cart</h1>
                <CartItemContainer URL={API_URL} />
            </div>
        </main>
    )
}
