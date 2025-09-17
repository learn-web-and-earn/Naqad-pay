import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Loader2 } from "lucide-react"; // spinner icon
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import Whatsapp from "@/assets/whatsapp.jpg";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ must be called here directly

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleVerify = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/"); // ✅ works now
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 pt-10 pb-6 relative">
      {/* Header */}
      <div className="w-full flex items-center justify-center relative">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">NaqaD</span>
        </div>
        <button className="absolute right-0">
          <img src={Whatsapp} alt="Whatsapp" className="w-10 h-10 rounded-full" />
        </button>
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col mt-10 flex-1 items-center">
        <h1 className="text-xl font-semibold mb-2">OTP Verification</h1>
        <p className="text-sm text-gray-500 mb-6">Enter the 6-digit code sent to your number</p>

        {/* Timer */}
        <div className="mb-6 text-gray-600 font-medium">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>

        {/* OTP Inputs */}
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup className="gap-3">
            {[...Array(6)].map((_, i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="w-12 h-12 text-lg border rounded-md"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* Verify button at bottom */}
      <div className="w-full mt-6">
        <Button
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 py-4 rounded-lg flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify"
          )}
        </Button>
      </div>

      {/* Background design */}
      <div className="absolute left-0 bottom-0 opacity-5">
        <svg width="200" height="200" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
          <rect width="220" height="220" rx="32" fill="#1E40AF" />
        </svg>
      </div>

      {/* Accessibility icon */}
      <button className="fixed right-4 bottom-4 text-gray-400">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2v20M2 12h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default OTP;
