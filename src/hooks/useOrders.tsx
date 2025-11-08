import { Order } from "@/utils/interface";
import { getOrdersByUsersId } from "@/services/orders/ordersService";
import { useEffect, useState } from "react";

interface Props {
  userId: string | number
}

const useOrders = (props: Props) => {

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const response = await getOrdersByUsersId(props.userId.toString());

        if(response){
          throw new Error("Error on request");
        }

        setIsLoading(false);
        setOrders(response);
      })();
    } catch (error) {
      console.error(error);      
    }
  }, [props.userId]);

  return {orders, isLoading};
};

export default useOrders;