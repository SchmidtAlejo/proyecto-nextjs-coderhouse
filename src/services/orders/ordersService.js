export const createOrder = async (body, URL) => {
    try {
        const response = await fetch(`${URL}/api/orders`, {
            method: "POST",
            body: JSON.stringify(body)
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getOrdersByUsersId = async (uid, URL) => {
    try {
        const response = await fetch(`${URL}/api/orders/${uid}`, { cache: 'no-store' });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getOrderByOrderId = async (id, URL) => {
    try {
        const response = await fetch(`${URL}/api/orders/orderid/${id}`, { cache: 'force-cache' });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}