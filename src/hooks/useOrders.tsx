import { Order } from "@/utils/interface";
import { getOrdersByUsersId } from "@/services/orders/ordersService";
import { useEffect, useState } from "react";

interface Props {
  userId: string | number
}

const useOrders = (props: Props) => {

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    try {
      (async () => {
        const response = await getOrdersByUsersId(props.userId.toString());

        if(response){
          throw new Error("Error on request")
        }

        setOrders(response)
      })()
    } catch (error) {
      console.error(error);      
    }
  }, [props.userId])

  return {orders};
}

export default useOrders;