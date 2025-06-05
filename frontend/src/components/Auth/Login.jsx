import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, User, Lock } from "lucide-react";
import { loginUser } from "../../API/LoginUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example form validation
    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }
    loginUser({ email, password });
    // Handle form submission (e.g., API call)
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="bg-gray-100 text-slate-900 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
      >
        <div className="bg-slate-900 text-white p-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-300 mb-6">Sign in to continue your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 flex items-center">
                <User className="mr-2 text-slate-600" size={18} />
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 flex items-center">
                <Lock className="mr-2 text-slate-600" size={18} />
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              <LogIn className="mr-2" size={18} />
              Login
            </motion.button>
          </div>

          <div className="text-center mt-6">
            <span className="text-slate-600">Don't have an account? </span>
            <a
              href="/signup"
              className="text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              Sign up
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
