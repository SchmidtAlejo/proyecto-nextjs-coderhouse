import OrdersTable from "@/components/OrdersTable";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: "Orders",
  description: "Orders Information"
};

export default function page() {
  return (
    <main>
      <div className="container-space">
        <h1 className="text-4xl">Orders</h1>
        <Suspense fallback={
          <div className="flex h-80 items-center justify-center">
            <Spinner />
          </div>
        }>
          <OrdersTable />
        </Suspense>
      </div>
    </main>
  );
}
