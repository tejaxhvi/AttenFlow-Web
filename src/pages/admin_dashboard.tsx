// login.tsx
import React from 'react';

import { useState } from "react";
// import { Mail, Lock, CheckSquare, Circle, Facebook, Twitter, UserPlus } from "lucide-react";
// import { FcGoogle } from "react-icons/fc"; // for Google logo

export default function Login() {
  const [role, setRole] = useState<"student" | "teacher">("student");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Illustration (placeholder for Lotus) */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
        <div className="w-64 h-64 rounded-full bg-blue-400 shadow-lg flex items-center justify-center text-white font-bold text-xl">
          Lotus Illustration
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Sign In!</h1>
            <p className="text-gray-600 mt-2">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                <UserPlus size={16} /> Sign up
              </a>
            </p>
          </header>

          {/* Role Selector */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                role === "student"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole("teacher")}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                role === "teacher"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Teacher
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input
                  type="email"
                  id="email"
                  required
                  className="pl-10 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input
                  type="password"
                  id="password"
                  required
                  className="pl-10 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100">
              <FcGoogle size={22} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100">
              <Facebook size={20} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100">
              <Twitter size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}