import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";

const Home = () => {
  const [checkingUser, setCheckingUser] = useState(true); // 🚀 loading state
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const user = localStorage.getItem("user");
      if (!user) {
        navigate("/login"); // 🚀 redirect if no user
      } else {
        setCheckingUser(false); // ✅ stop loading if user exists
      }
    }, 1500); // fake delay (1.5s) for smooth loading effect

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLoginAgain = () => {
    localStorage.removeItem("user"); // 🚀 clear user
    navigate("/login");
  };

  // 🔹 Show loading while checking
  if (checkingUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <img src={Logo} alt="" />
      </div>
    );
  }

  // 🔹 Main content after verification
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <h1 className="text-lg font-medium text-gray-800 mb-4">
        Dear user, we have received your request. Our team will verify your
        details and update your account. Please wait for 24 hours. Thanks.
      </h1>

      <Button
        onClick={handleLoginAgain}
        className="mt-6 w-full max-w-xs bg-blue-900 hover:bg-blue-800 py-3 rounded-lg"
      >
        Login Again
      </Button>
    </div>
  );
};

export default Home;
