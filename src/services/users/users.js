const API_URL = process.env.NEXT_PUBLIC_URL_PROD;

export const createUserGoogle = async (body) => {
    try {
        return await fetch(`${API_URL}/api/users/google`, {
            method: "POST",
            body: JSON.stringify(body)
        });
    } catch (error) {

    }
}

export const createUser = async (body) => {
    return await fetch(`${API_URL}/api/users`, {
        method: "POST",
        body: JSON.stringify(body)
    });
}

export const getUser = async (uid) => {
    const response = await fetch(`${API_URL}/api/users/${uid}`)
    return await response.json()
}