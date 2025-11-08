import { Product } from "@/utils/interface";

const API_URL = process.env.NEXT_PUBLIC_URL_PROD;

export const getProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`${API_URL}/api/products/${id}`,
        {
            cache: 'no-store'
        });
    if (!response.ok) {
        throw new Error('Error with the request')
    }
    return await response.json();
}

export const getProducts = async (category: string): Promise<Product[]> => {
    try {
        const response = await fetch(`${API_URL}/api/category/${category}`, { cache: "no-store" })
        if (!response.ok) {
            throw new Error('Error with the request')
        }

        return await await response.json();
    } catch (error) {
        return [];
    }
}

export const createProduct = async (values, file) => {
    try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            formData.set(key, values[key]);
        })
        formData.set("thumbnail", file);

        const response = await fetch(`${API_URL}/api/products`, {
            method: "POST",
            body: formData
        });
        return await response.json()
    } catch (error) {
        console.error(error);
    }
}

export const updateProduct = async (id, body) => {
    try {
        const response = await fetch(`${API_URL}/api/products/${id}`, {
            body: JSON.stringify(body),
            method: 'PUT'
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}