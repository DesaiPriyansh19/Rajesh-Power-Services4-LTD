import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../public/RajeshPower.jpg";
import logo from "../public/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = () => {
    navigate("/home");
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  return (
 <div className="flex flex-col md:flex-row min-h-screen">
  {/* Left Side - Image */}
  <div className="w-full md:w-[60%] bg-gray-200 h-auto md:h-auto">
    <img
      src={bgImg}
      alt="Login Visual"
      className="w-full h-full object-cover"
    />
    
  </div>


  {/* Right Side - White BG */}
  <div className="w-full md:w-[40%] bg-white flex items-center justify-center p-6">
    <div className="w-full max-w-sm  flex flex-col items-center text-center box-shadow-1 rounded-lg px-4 py-8">
      
      {/* Logo */}
      <img src={logo} alt="Logo" className="mb-6 w-32 md:w-40" />

      {showForgotPassword ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mb-4 w-full">
            Send Reset Link
          </button>
          <button
            onClick={handleBackToLogin}
            className="w-full border border-green-500 text-green-500 py-2 rounded hover:bg-green-500 hover:text-white transition"
          >
            Back to Login
          </button>
        </>
      ) : (
        <>
          {/* User ID */}
          <input
            type="text"
            placeholder="User ID"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 mb-4">
            <button
              onClick={handleLogin}
              className="bg-[#005AAB] text-sm rounded-md hover:bg-[#0068c3] text-white px-4 py-2  w-full sm:w-auto"
            >
              Login
            </button>
            <button className="bg-gray-800 text-sm rounded-md hover:bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto">
              Cancel
            </button>
            <span
              className="text-red-500 cursor-pointer font-medium text-sm "
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </span>
          </div>

          {/* Footer text */}
          <p className="text-[#005AAB] font-bold text-sm">
            Managing operations in easy manor
          </p>
        </>
      )}
    </div>
  </div>
</div>

  );
};

export default Login;
