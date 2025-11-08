import CartItemContainer from "@/components/CartItemContainer";

export const metadata = {
    title: "Cart",
    description: "Cart"
}

export default function page() {
    return (
        <main className="">
            <div className="container-space">
                <h1 className="text-4xl">Cart</h1>
                <CartItemContainer />
            </div>
        </main>
    )
}
