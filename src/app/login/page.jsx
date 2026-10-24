
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        alert(error.message || "Login failed");
        return;
      }

      if (data) {
        alert("Login successful!");

        // Go to home page
        router.push("/");

        // Refresh the page so the session is updated
        router.refresh();
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">

        <div className="grid w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_70px_rgba(47,53,66,0.08)] lg:grid-cols-2">

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

            {/* Main Content */}
            <div className="max-w-md">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                👋
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white">
                Welcome back.
                <span className="block text-blue-200">
                  Your next opportunity awaits.
                </span>
              </h1>

              <p className="mt-5 leading-7 text-blue-100">
                Sign in to discover new opportunities, manage your
                applications, and stay connected with employers.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3D9970] text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-50">
                    Discover flexible part-time jobs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3D9970] text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-50">
                    Track your applications
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3D9970] text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-50">
                    Connect with employers
                  </span>
                </div>

              </div>

            </div>

            <p className="text-sm text-blue-200">
              Find work. Gain experience. Keep learning.
            </p>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center p-7 sm:p-10 lg:p-14">

            <div className="w-full">

              {/* Mobile Logo */}
              <Link
                href="/"
                className="mb-10 flex items-center gap-2 lg:hidden"
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
                  WELCOME BACK
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#2F3542]">
                  Log in to HireMe
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Enter your details to access your account.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={onSubmit}
                className="mt-8 space-y-5"
              >

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

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-semibold text-[#2F3542]">
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-[#0454D9] hover:underline"
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      placeholder="Enter your password"
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

                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3">

                  <input
                    id="remember"
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-gray-300 accent-[#0454D9]"
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-500"
                  >
                    Remember me
                  </label>

                </div>

                {/* Login */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#0454D9] py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(4,84,217,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0349BE] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>

              </form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-100" />

                <span className="text-xs text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-gray-100" />
              </div>

              {/* Google */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-[#2F3542] transition hover:border-gray-300 hover:bg-gray-50"
              >
                <span className="text-base font-bold">
                  G
                </span>

                Continue with Google
              </button>

              {/* Signup */}
              <p className="mt-7 text-center text-sm text-gray-400">
                Don't have an account?{" "}

                <Link
                  href="/signup"
                  className="font-semibold text-[#0454D9] hover:underline"
                >
                  Create an account
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default LoginPage;

