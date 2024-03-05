export const getCategories = async (API_URL) => {
    try {
        const response = await fetch(`${API_URL}/api/category`, {
            cache: "no-store"
        })
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}