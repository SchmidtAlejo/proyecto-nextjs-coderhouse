import LoginForm from "@/components/auth/LoginForm";
const API_URL = process.env.NEXT_URL_DEV;

export const metadata = {
    title: "Login",
    description: "Login page"
}

export default function page() {
    return (
        <div>
            <LoginForm admin={true} URL={API_URL} />
        </div>
    )
}
