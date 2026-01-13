
"use client";

import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left side - Social Login */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Sign in with Social Media</h2>
          <p className="text-gray-500 mb-6">
            Access your account quickly and securely using one of your social accounts.
          </p>

          <button className="flex items-center justify-center mb-4 w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
            <span className="mr-2">f</span> Sign in with Facebook
          </button>

          <button className="flex items-center justify-center mb-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            <span className="mr-2">in</span> Sign in with LinkedIn
          </button>

          <button className="flex items-center justify-center mb-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            <span className="mr-2">G+</span> Sign in with Google
          </button>

          <p className="text-gray-400 text-sm mt-6">
            By clicking "Login", you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
          </p>
        </div>

        {/* Right side - Email Login */}
        <div className="w-1/2 bg-teal-700 p-10 flex flex-col justify-center text-white">
          <h2 className="text-2xl font-semibold mb-6">Login with Email</h2>

          <input
            type="email"
            placeholder="Enter your email address"
            className="mb-4 w-full px-4 py-2 rounded text-black border"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="mb-4 w-full px-4 py-2 rounded text-black border"
          />

          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-sm underline">Forgot password?</a>
            <button className="bg-gray-800 px-6 py-2 rounded hover:bg-gray-900 transition">
              Login
            </button>
          </div>

          <p className="text-sm">
            Don’t have an account? <a href="#" className="underline font-semibold">Create one now</a>
          </p>
        </div>

      </div>
    </div>
  );
}
