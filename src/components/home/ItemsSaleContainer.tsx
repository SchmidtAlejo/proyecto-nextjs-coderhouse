import ItemSale from "./ItemSale";

export default function ItemsSaleContainer() {
  return (
    <div className="home__sale container mx-auto my-4 grid grid-cols-6 gap-4 px-3 md:px-0">
      <div className="col-span-6 md:col-span-3">
        <ItemSale
          category={"smartphones"}
          image={"https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      </div>
      <div className="col-span-6 md:col-span-3">
        <ItemSale
          category={"laptops"}
          image={"https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      </div>
      <div className="col-span-6 md:col-span-2">
        <ItemSale
          category={"fragrances"}
          image={"https://images.unsplash.com/photo-1613521140785-e85e427f8002?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      </div>
      <div className="col-span-6 md:col-span-2">
        <ItemSale
          category={"skincare"}
          image={"https://plus.unsplash.com/premium_photo-1679448062287-889b771e1372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      </div>
      <div className="col-span-6 md:col-span-2">
        <ItemSale
          category={"home-decoration"}
          image={"https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        />
      </div>
    </div>
  );
}