import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginAgain = () => {
    navigate("/login");
  };

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
