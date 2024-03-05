export const getProduct = async (id, API_URL) => {
    const response = await fetch(`${API_URL}/api/products/${id}`,
        {
            cache: 'no-store'
        });
    if (!response.ok) {
        throw new Error('Error with the request')
    }
    return await response.json();
}

export const getProducts = async (category, API_URL) => {
    try {
        const response = await fetch(`${API_URL}/api/category/${category}`, { cache: "no-store" })
        if (!response.ok) {
            throw new Error('Error with the request')
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const createProduct = async (URL, values, file) => {
    try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            formData.set(key, values[key]);
        })
        formData.set("thumbnail", file);

        const response = await fetch(`${URL}/api/products`, {
            method: "POST",
            body: formData
        });
        return await response.json()
    } catch (error) {
        console.error(error);
    }
}

export const updateProduct = async (id, body, URL) => {
    try {
        const response = await fetch(`${URL}/api/products/${id}`, {
            body: JSON.stringify(body),
            method: 'PUT'
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}