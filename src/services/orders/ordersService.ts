import { CartItem, CreateOrderRequest, CreateOrderResponse, Order } from "@/utils/interface";

const API_URL = process.env.NEXT_PUBLIC_URL_PROD;

export const createOrder = async (body: CreateOrderRequest):  Promise<CreateOrderResponse> => {
    try {
        const response = await fetch(`${API_URL}/api/orders`, {
            method: "POST",
            body: JSON.stringify(body)
        })        
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getOrdersByUsersId = async (uid: string): Promise<Order[]> => {
    try {
        const response = await fetch(`${API_URL}/api/orders/${uid}`, { cache: 'no-store' });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getOrderByOrderId = async (id: string): Promise<Order> => {
    try {
        const response = await fetch(`${API_URL}/api/orders/orderid/${id}`, { cache: 'force-cache' });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}