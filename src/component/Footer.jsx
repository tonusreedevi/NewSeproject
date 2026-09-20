
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-[#2F3542] text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0454D9] text-lg font-bold text-white">
                H
              </div>

              <span className="text-xl font-bold">
                Hire<span className="text-[#4D9FFF]">Me</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Helping students find flexible part-time opportunities
              that fit their studies, skills, and career goals.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm text-gray-400 transition hover:bg-[#0454D9] hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm text-gray-400 transition hover:bg-[#0454D9] hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm text-gray-400 transition hover:bg-[#0454D9] hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm text-gray-400 transition hover:bg-[#0454D9] hover:text-white"
              >
                ◎
              </a>

            </div>

          </div>

          {/* For Students */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              For Students
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/jobs"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Find Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/my-jobs"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  My Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/my-interactions"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  My Applications
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Create Profile
                </Link>
              </li>

            </ul>

          </div>

          {/* For Employers */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              For Employers
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/add-job"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Post a Job
                </Link>
              </li>

              <li>
                <Link
                  href="/my-jobs"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Manage Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/applications"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  View Applications
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Become an Employer
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              HireMe
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-gray-500">
            © {new Date().getFullYear()} HireMe. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500">
            <span className="h-2 w-2 rounded-full bg-[#3D9970]" />
            Built for students. Designed for opportunity.
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

