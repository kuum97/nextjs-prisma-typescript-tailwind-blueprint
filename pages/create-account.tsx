import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import { useRouter } from "next/router";

interface ValidForm {
  email?: string;
  password?: string;
  password_confirm?: string;
}

export default function Create_account() {
  const { register, handleSubmit, watch } = useForm();
  const router = useRouter();
  const onValid = async (data: ValidForm) => {
    try {
      const response = await fetch("/api/user/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      if (jsonData) {
        router.push("/log-in");
      } else {
        console.error("Failed to create an account.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <Layout title="create">
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
        <label htmlFor="password_confirm">
          Password Confirm
          <input
            className="border border-blue-400 ml-3 rounded-md"
            {...register("password_confirm", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
            id="password_confirm"
            type="text"
          />
        </label>
        <input
          className="border border-blue-400 rounded-md p-1"
          type="submit"
          value="submit"
        />
      </form>
    </Layout>
  );
}
