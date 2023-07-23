import React, { useEffect } from "react";
import type { NextPage } from "next";
import Layout from "../components/layout";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/user/log-out", {
        method: "POST",
      });
      if (response.ok) {
        router.push("/log-in");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
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
    <Layout title="home">
      <ul className="space-y-1">
        <li>Hello</li>
        <li>Hi</li>
        <li>Ok</li>
        <li>123</li>
        <li>456</li>
        <li>789</li>
        <li>000</li>
      </ul>
      <button
        className="border border-blue-400 rounded-md p-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </Layout>
  );
};

export default Home;
