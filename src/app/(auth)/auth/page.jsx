// app/(auth)/auth/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // If using NextAuth.js
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast"; // or use your preferred toast library

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // true = Login, false = Register
  const [loading, setLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files) {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // ---------------- LOGIN ----------------
        const result = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (result?.error) {
          toast.error(result.error || "Invalid credentials");
        } else {
          toast.success("Login successful!");
          router.push("/library"); // or your default user route
        }
      } else {
        // ---------------- REGISTER ----------------
        if (!formData.name || !formData.email || !formData.password) {
          toast.error("Please fill all required fields");
          return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("password", formData.password);
        if (formData.photo) {
          formDataToSend.append("photo", formData.photo);
        }

        const res = await fetch("/api/auth/register", {
          method: "POST",
          body: formDataToSend,
        });

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.message || "Registration failed");
          return;
        }

        toast.success("Registration successful! Please login.");
        setIsLogin(true); // Switch to login after successful register
        setFormData({ name: "", email: "", password: "", photo: null });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/library",
      });

      if (result?.error) {
        toast.error("Google login failed");
      } else if (result?.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      toast.error("Google sign-in error");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 p-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Join BookWorm"}
          </h1>
          <p className="text-amber-200 mt-2">
            {isLogin
              ? "Login to continue your reading journey"
              : "Create your account and start tracking"}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex border-b">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 font-medium transition-colors ${
              isLogin
                ? "border-b-4 border-amber-600 text-amber-800"
                : "text-gray-500 hover:text-amber-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 font-medium transition-colors ${
              !isLogin
                ? "border-b-4 border-amber-600 text-amber-800"
                : "text-gray-500 hover:text-amber-700"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {!isLogin && (
            <>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="John Doe"
                  required={!isLogin}
                />
              </div>

              {/* Profile Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Photo (optional)
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                />
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-60"
          >
            <FcGoogle className="text-2xl" />
            <span className="font-medium text-gray-700">
              {isLogin ? "Sign in" : "Sign up"} with Google
            </span>
          </button>
        </form>

        {/* Toggle link */}
        <div className="text-center pb-8 text-sm text-gray-600">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-amber-700 hover:underline font-medium"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-amber-700 hover:underline font-medium"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
