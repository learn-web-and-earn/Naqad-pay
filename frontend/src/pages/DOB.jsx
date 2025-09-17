import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from '@/assets/logo.png';
import Whatsapp from '@/assets/whatsapp.jpg';

const DOB = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/otp");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 pt-10 pb-6 relative">
      {/* Header with centered logo and WhatsApp on right */}
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
      <div className="w-full flex flex-col mt-10 flex-1">
        <h1 className="text-xl font-semibold">Verify Yourself</h1>
        <p className="text-sm text-gray-500">Enter Emirates ID or Date of Birth</p>

        {/* Emirates ID or DOB Input */}
        <div className="w-full mt-6">
          <label className="block text-sm text-gray-700 mb-2">Emirates ID / Date of Birth</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter Emirates ID or DOB"
              className="border-0 focus:ring-0 flex-1 p-0"
            />
          </div>
        </div>
      </div>

      {/* Bottom section with Next button */}
      <div className="w-full mt-6">
        <Button
          onClick={handleNext}
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 py-4 rounded-lg"
        >
          {loading ? "Loading..." : "Next"}
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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default DOB;