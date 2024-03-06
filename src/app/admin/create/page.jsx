import CreateForm from "@/components/admin/CreateForm";
const API_URL = process.env.NEXT_URL_PROD;

export const metadata = {
    title: "Create product",
    description: "Create product page"
}

export default function page() {
    return (
        <main className="create-product">
            <div className="container-space">
                <h2 className="text-4xl">Create product</h2>
                <CreateForm URL={API_URL} />
            </div>
        </main>
    )
}
