import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login",
  description: "Login page"
};

export default function page() {
  return (
    <div>
      <LoginForm admin={true} />
    </div>
  );
}
