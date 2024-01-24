import Banner from "../components/home/Banner"
import ItemsSaleContainer from "../components/home/ItemsSaleContainer";

export const metadata = {
  title: "BORD",
  description: "Venta de productos"
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