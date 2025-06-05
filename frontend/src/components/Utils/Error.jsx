import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
          <div className="flex justify-center mb-6">
            <AlertTriangle
              className="text-red-500 w-24 h-24 animate-pulse"
              strokeWidth={1.5}
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The page you're looking for seems to have taken an unexpected
            detour.
          </p>

          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform text-center"
            >
              Return to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform  "
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          Need help?{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
