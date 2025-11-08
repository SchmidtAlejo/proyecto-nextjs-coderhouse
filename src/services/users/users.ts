import { CreateUserRequest, GetUserResponse } from "@/utils/interface";

const API_URL = process.env.NEXT_PUBLIC_URL_PROD;

export const createUserGoogle = async (body: CreateUserRequest) => {
    try {
        return await fetch(`${API_URL}/api/users/google`, {
            method: "POST",
            body: JSON.stringify(body)
        });
    } catch (error) {

    }
}

export const createUser = async (body: CreateUserRequest) => {
    return await fetch(`${API_URL}/api/users`, {
        method: "POST",
        body: JSON.stringify(body)
    });
}

export const getUser = async (uid: string): Promise<GetUserResponse> => {
    const response = await fetch(`${API_URL}/api/users/${uid}`).catch(error => {
        console.error(error);
        return null;
    });
    return await response.json()
}