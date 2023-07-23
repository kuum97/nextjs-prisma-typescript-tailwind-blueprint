import { useForm } from "react-hook-form";
import Layout from "../../components/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface TweetForm {
  payload?: string;
}

export default function uploadTweet() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onValid = async (data: TweetForm) => {
    try {
      const response = await fetch("/api/tweet/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      router.push("/");
      if (jsonData.error) {
        console.error("Failed to upload");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/check");
        const data = await response.json();
        if (!data.isLoggedIn) {
          router.push("/log-in");
        }
      } catch (error) {
        console.error("Error occurred during session check:", error);
      }
    };
    checkSession();
  }, [router]);
  return (
    <Layout title="Upload">
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col items-start space-y-2"
      >
        <label htmlFor="payload">
          Tweet
          <input
            className="border border-blue-400 ml-3 rounded-md"
            {...register("payload", { required: true })}
            id="payload"
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
