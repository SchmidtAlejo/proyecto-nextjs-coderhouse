import Link from "next/link";

export const metadata = {
    title: "Purchase",
    description: "Purchase completed"
}

export default function page() {
    return (
        <main>
            <div className="container-space">
                <h1 className="text-4xl">Purchase completed</h1>
                <p className="text-lg mt-6 mb-12">Your purchase ID is: #412341</p>
                <Link className="text-lg text-blue-400" href={'/'}>Go Home</Link>
            </div>
        </main>
    )
}
