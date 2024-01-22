import Banner from "../components/Banner"
import ItemsSaleContainer from "../components/ItemsSaleContainer";

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