import Link from "next/link";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface LoginForm {
  email?: string;
  password?: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onValid = async (data: LoginForm) => {
    try {
      const response = await fetch("/api/user/log-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      if (jsonData.error) {
        console.error("Failed to log in");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <Layout title="login">
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col items-start space-y-2"
      >
        <label htmlFor="email">
          Email
          <input
            className="border border-blue-400 ml-3 rounded-md"
            {...register("email", { required: true })}
            id="email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            className="border border-blue-400 ml-3 rounded-md"
            {...register("password", { required: true })}
            id="password"
            type="text"
          />
        </label>
        <input
          className="border border-blue-400 rounded-md p-1"
          type="submit"
          value="submit"
        />
      </form>
      <div>
        <Link href="/create-account">Create Account</Link>
      </div>
    </Layout>
  );
}
