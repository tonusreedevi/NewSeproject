"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignupPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Check password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Check password length
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name: fullName,
      });

      if (error) {
        alert(error.message || "Signup failed");
        return;
      }

      if (data) {
        alert("Account created successfully!");

        // Go to home page
        router.push("/");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_70px_rgba(47,53,66,0.08)] lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}

          <div className="hidden bg-[#0454D9] p-12 lg:flex lg:flex-col lg:justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-[#0454D9]">
                H
              </div>

              <span className="text-xl font-bold text-white">
                HireMe
              </span>

            </Link>

            {/* Content */}
            <div className="max-w-md">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                ✦
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white">
                Find opportunities
                <span className="block text-blue-200">
                  that fit your life.
                </span>
              </h1>

              <p className="mt-5 leading-7 text-blue-100">
                Create your HireMe account and discover flexible part-time
                opportunities that match your skills, interests, and schedule.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3D9970] text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-50">
                    Discover flexible job opportunities
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3D9970] text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-50">
                    Build valuable work experience
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3D9970] text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-50">
                    Manage your applications easily
                  </span>
                </div>

              </div>

            </div>

            <p className="text-sm text-blue-200">
              Find work. Gain experience. Keep learning.
            </p>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="p-7 sm:p-10 lg:p-12">

            {/* Mobile Logo */}
            <Link
              href="/"
              className="mb-8 flex items-center gap-2 lg:hidden"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0454D9] font-bold text-white">
                H
              </div>

              <span className="text-xl font-bold text-[#2F3542]">
                Hire<span className="text-[#0454D9]">Me</span>
              </span>

            </Link>

            {/* Heading */}
            <div>

              <p className="text-sm font-semibold tracking-wide text-[#0454D9]">
                GET STARTED
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#2F3542]">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Join HireMe and start exploring new opportunities.
              </p>

            </div>

            {/* Form */}
            <form
              className="mt-7 space-y-4"
              onSubmit={onSubmit}
            >

              {/* Full Name */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#2F3542]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[#2F3542] outline-none transition placeholder:text-gray-400 focus:border-[#0454D9] focus:ring-4 focus:ring-[#0454D9]/10"
                />

              </div>

              {/* Email */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#2F3542]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-[#2F3542] outline-none transition placeholder:text-gray-400 focus:border-[#0454D9] focus:ring-4 focus:ring-[#0454D9]/10"
                />

              </div>

              {/* Password */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#2F3542]">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-16 text-sm text-[#2F3542] outline-none transition placeholder:text-gray-400 focus:border-[#0454D9] focus:ring-4 focus:ring-[#0454D9]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 hover:text-[#0454D9]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

                <p className="mt-1.5 text-xs text-gray-400">
                  Use at least 8 characters.
                </p>

              </div>

              {/* Confirm Password */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#2F3542]">
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    required
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-16 text-sm text-[#2F3542] outline-none transition placeholder:text-gray-400 focus:border-[#0454D9] focus:ring-4 focus:ring-[#0454D9]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 hover:text-[#0454D9]"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-1">

                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#0454D9]"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-gray-400"
                >
                  I agree to the{" "}

                  <Link
                    href="/terms"
                    className="font-medium text-[#0454D9] hover:underline"
                  >
                    Terms & Conditions
                  </Link>

                  {" "}and{" "}

                  <Link
                    href="/privacy"
                    className="font-medium text-[#0454D9] hover:underline"
                  >
                    Privacy Policy
                  </Link>

                  .
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#0454D9] py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(4,84,217,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0349BE] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-400">

              Already have an account?{" "}

              <Link
                href="/login"
                className="font-semibold text-[#0454D9] hover:underline"
              >
                Log in
              </Link>

            </p>

          </div>

        </div>

      </div>

    </main>
  );
};

export default SignupPage;

