import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import Whatsapp from "@/assets/whatsapp.png";

const Home = () => {
  const [checkingUser, setCheckingUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const user = localStorage.getItem("user");
      if (!user) {
        navigate("/login");
      } else {
        setCheckingUser(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLoginAgain = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Loading state
  if (checkingUser) {
    return (
      <div className="min-h-[90vh] flex flex-col justify-center items-center bg-white px-6 pt-10 pb-6 relative">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">NaqaD</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] bg-white flex flex-col justify-between px-6 pt-10 pb-6 relative">
      {/* Header */}
      <div className="w-full flex items-center justify-center relative">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">NaqaD</span>
        </div>
        <img
          src={Whatsapp}
          alt="Whatsapp"
          className="w-8 h-8 rounded-full absolute right-0"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mt-10 px-4">
        <h1 className="text-lg font-medium text-gray-800 mb-4">
          Dear user, we have received your request. Our team will verify your
          details and update your account. Please wait for 24 hours. Thanks.
        </h1>
      </div>

      {/* Bottom Button */}
      <div className="w-full mt-6">
        <Button
          onClick={handleLoginAgain}
          className="w-full bg-blue-900 hover:bg-blue-800 py-4 rounded-lg"
        >
          Login Again
        </Button>
      </div>
    </div>
  );
};

export default Home;
