import ButtonFill from "@/components/ui/ButtonFill";

export const metadata = {
  title: "Contact",
  description: "Contact with our staff"
}

export default function page() {
  return (
    <main className="contact">
      <div className="container-space">
        <h1 className="text-4xl">Contact</h1>
        <div className="bg-neutral-800 p-6 mt-6 rounded-lg">
          <div className="flex flex-col">
            <input type="text" placeholder="Name*"/>
            <input type="text" placeholder="Surname*"/>
            <input type="text" placeholder="Email*"/>
            <input type="text" placeholder="Phone"/>
          </div>
          <textarea name="" id="" cols="30" rows="10" 
          placeholder="Message*"></textarea>
          <ButtonFill>
            Send
          </ButtonFill>
        </div>
      </div>
    </main>
  )
}
