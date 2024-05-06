const API_URL = process.env.NEXT_PUBLIC_URL_PROD;

export const getCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/api/category`, {
            cache: "no-store"
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}