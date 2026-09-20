
"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0454D9] text-lg font-bold text-white shadow-[0_6px_20px_rgba(4,84,217,0.25)] transition duration-300 group-hover:scale-105">
            H
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-bold tracking-tight text-[#2F3542]">
              Hire<span className="text-[#0454D9]">Me</span>
            </h1>
            <p className="mt-1 text-[10px] font-medium tracking-wider text-gray-400">
              FIND • WORK • GROW
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center rounded-2xl border border-gray-100 bg-gray-50/80 p-1 md:flex">

          <Link
            href="/"
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#0454D9] shadow-sm"
          >
            Home
          </Link>

          <Link
            href="/jobs"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#2F3542] transition-all duration-200 hover:bg-white hover:text-[#0454D9] hover:shadow-sm"
          >
            All Jobs
          </Link>

          <Link
            href="/add-job"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#2F3542] transition-all duration-200 hover:bg-white hover:text-[#0454D9] hover:shadow-sm"
          >
            Add Jobs
          </Link>

          <Link
            href="/my-jobs"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#2F3542] transition-all duration-200 hover:bg-white hover:text-[#0454D9] hover:shadow-sm"
          >
            My Jobs
          </Link>

          <Link
            href="/my-interactions"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#2F3542] transition-all duration-200 hover:bg-white hover:text-[#0454D9] hover:shadow-sm"
          >
            My Interactions
          </Link>

        </nav>

        {/* Auth */}
        <div className="flex items-center gap-2">

          <Link
            href="/login"
            className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-[#2F3542] transition hover:bg-gray-50 hover:text-[#0454D9] sm:block"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="group flex items-center gap-2 rounded-xl bg-[#0454D9] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(4,84,217,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0349BE] hover:shadow-[0_8px_25px_rgba(4,84,217,0.3)]"
          >
             Sign Up
       
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Navbar;

