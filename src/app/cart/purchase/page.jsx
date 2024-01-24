import Link from "next/link";

export const metadata = {
    title: "Purchase",
    description: "Purchase completed"
}

export default function page() {
    return (
        <main>
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                <h1 className="text-4xl">Purchase completed</h1>
                <p className="text-lg mt-6 mb-12">Your purchase ID is: #412341</p>
                <Link className="text-lg text-blue-400" href={'/'}>Go Home</Link>
            </div>
        </main>
    )
}
