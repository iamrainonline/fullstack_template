import React, { useState } from "react";
// import { motion } from "framer-motion"; // Commented out for demo
// import { useNavigate } from "react-router-dom"; // Commented out for demo
import { LogIn, User, Lock, GraduationCap, Eye, EyeOff } from "lucide-react";
// import { loginUser } from "../../API/LoginUser"; // Commented out for demo

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate(); // Commented out for demo

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      setError("Please fill in both fields");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call for demo
      setTimeout(() => {
        setIsLoading(false);
        // For demo purposes, just show success
        alert("Login successful! (Demo mode)");
      }, 1500);

      // Real implementation:
      // const response = await loginUser({ email, password });
      // if (response.success) {
      //   navigate("/dashboard");
      // } else {
      //   setError(response.message || "Invalid credentials");
      // }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden flex items-center justify-center px-4 py-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-15 blur-lg"></div>
      <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-blue-300 rounded-full opacity-10 blur-xl"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 text-white p-8 text-center relative overflow-hidden">
            {/* Header decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-2 right-8 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>
              <div className="absolute bottom-4 left-6 w-12 h-12 bg-purple-500 rounded-full opacity-10 blur-lg"></div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="text-blue-100 opacity-90">
                Sign in to Windsor International Portal
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  {error}
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <label className="block mb-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-slate-400 hover:bg-white/80"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Password Field */}
              <div className="group">
                <label className="block mb-3 text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-600" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-5 py-4 pr-12 bg-white/70 backdrop-blur-sm border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-slate-400 hover:bg-white/80"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Forgot your password?
                </a>
              </div>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Sign In to Portal
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 backdrop-blur-sm text-slate-500 rounded-full">
                  New to Windsor International?
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <a
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm border border-white/40 text-slate-700 font-semibold rounded-xl hover:bg-white/70 hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Create New Account
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm">
            Need help? Contact our{" "}
            <a
              href="/support"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              IT Support Team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
