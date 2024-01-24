import Banner from "../components/home/Banner"
import ItemsSaleContainer from "../components/home/ItemsSaleContainer";

export const metadata = {
  title: "BORD",
  description: "Sale of products"
}

function App() {

  return (
    <main className="home">
      <Banner />
      <ItemsSaleContainer />
    </main>
  )
}

export default App