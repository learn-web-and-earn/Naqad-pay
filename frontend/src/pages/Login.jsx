import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock } from "lucide-react"; // ✅ Lock icon added
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.png";
import Whatsapp from "@/assets/whatsapp.png";
import Flag from "@/assets/uae.svg";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dob");
    }, 2000);
  };

  return (
    <div className="min-h-[90vh] bg-white flex flex-col justify-between px-6 pt-10 pb-6">
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
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Welcome Back!</h1>
          <p className="text-sm text-gray-500">Enter your credentials</p>
        </div>

        {/* Phone number */}
        <div className="w-full mt-6">
          <label className="block text-sm text-gray-700 mb-2">Phone number</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <img src={Flag} alt="UAE" className="w-6 h-6" />
            <span className="ml-2 mr-2">+971</span>
            <div className="w-[1px] h-5 bg-gray-300 mx-2" /> {/* ✅ Divider line */}
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
          <div className="relative flex items-center border rounded-lg px-3">
            {/* ✅ Lock icon at left */}
            <Lock size={18} className="text-gray-400 mr-2" />
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="flex-1 border-0 focus:outline-none focus:ring-0 p-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* ✅ Forgot Password link */}
          <p className="text-right text-sm text-blue-900 mt-2 cursor-pointer">
            Forgot Password?
          </p>
        </div>
      </div>

      {/* Bottom button */}
      <div className="w-full mt-6">
        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 py-4 rounded-lg"
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </div>

      {/* ✅ Signup link */}
      <p className="text-center text-sm text-gray-600 mt-3">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-900 font-medium cursor-pointer"
        >
          Signup
        </span>
      </p>
    </div>
  );
}
