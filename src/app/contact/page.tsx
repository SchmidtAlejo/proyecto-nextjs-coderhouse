import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contact with our staff"
}

export default function page() {
  return (
    <main className="contact">
      <div className="container-space">
        <h1 className="text-4xl">Contact</h1>
        <ContactForm />
      </div>
    </main>
  )
}
