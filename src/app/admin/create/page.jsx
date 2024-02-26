import CreateForm from "@/components/admin/CreateForm";

export default function page() {
    return (
        <main className="create-product">
            <div className="container-space">
                <h2 className="text-4xl">Create product</h2>
                <CreateForm />
            </div>
        </main>
    )
}
