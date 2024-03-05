export const createUserGoogle = async (body, URL) => {
    try {
        return await fetch(`${URL}/api/users/google`, {
            method: "POST",
            body: JSON.stringify(body)
        });
    } catch (error) {

    }
}

export const createUser = async (body, URL) => {
    return await fetch(`${URL}/api/users`, {
        method: "POST",
        body: JSON.stringify(body)
    });
}

export const getUser = async (uid, URL) => {
    const response = await fetch(`${URL}/api/users/${uid}`)
    return await response.json()
}