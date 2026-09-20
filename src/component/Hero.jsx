"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const jobs = [
  {
    company: "Bright Learning",
    logo: "BL",
    title: "Teaching Assistant",
    location: "Chattogram",
    type: "Part-time",
    salary: "৳8k–12k",
    color: "blue",
  },
  {
    company: "Urban Bites",
    logo: "UB",
    title: "Restaurant Assistant",
    location: "Chattogram",
    type: "Flexible",
    salary: "৳7k–10k",
    color: "green",
  },
  {
    company: "Pixel Studio",
    logo: "PS",
    title: "Social Media Assistant",
    location: "Remote",
    type: "Part-time",
    salary: "৳10k+",
    color: "blue",
  },
];

const reviews = [
  {
    name: "Nusrat Jahan",
    role: "University Student",
    initials: "NJ",
    review:
      "HireMe helped me find a part-time job that actually fits around my university schedule.",
    rating: 5,
  },
  {
    name: "Rafi Ahmed",
    role: "CSE Student",
    initials: "RA",
    review:
      "I wanted practical experience while studying. I found a flexible role related to my interests.",
    rating: 5,
  },
  {
    name: "Sadia Rahman",
    role: "BBA Student",
    initials: "SR",
    review:
      "The flexible job options made it much easier to balance work and my classes.",
    rating: 5,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideType, setSlideType] = useState("jobs");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        if (slideType === "jobs") {
          return (prev + 1) % jobs.length;
        }

        return (prev + 1) % reviews.length;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [slideType]);

  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0454D9]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0454D9]/10 bg-[#F0F6FF] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#3D9970]" />

              <span className="text-sm font-semibold text-[#0454D9]">
                Built for Students
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-5xl font-bold leading-[1.08] tracking-tight text-[#2F3542] lg:text-6xl">
              Work that fits
              <span className="block text-[#0454D9]">
                your student life.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              Find flexible part-time opportunities that help you earn,
              gain real-world experience, and keep your education on track.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/jobs"
                className="rounded-xl bg-[#0454D9] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(4,84,217,0.20)] transition hover:-translate-y-0.5 hover:bg-[#0349BE]"
              >
                Explore Jobs 
              </Link>


            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <p className="text-2xl font-bold text-[#2F3542]">
                  500+
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Student Jobs
                </p>
              </div>

              <div className="h-10 w-px bg-gray-200" />

              <div>
                <p className="text-2xl font-bold text-[#2F3542]">
                  150+
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Employers
                </p>
              </div>

              <div className="h-10 w-px bg-gray-200" />

              <div>
                <p className="text-2xl font-bold text-[#2F3542]">
                  4.8/5
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Student Rating
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">

            {/* Toggle */}
            <div className="mb-5 flex w-fit rounded-xl border border-gray-100 bg-gray-50 p-1">

              <button
                onClick={() => {
                  setSlideType("jobs");
                  setActiveSlide(0);
                }}
                className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
                  slideType === "jobs"
                    ? "bg-white text-[#0454D9] shadow-sm"
                    : "text-gray-400 hover:text-[#2F3542]"
                }`}
              >
                Jobs
              </button>

              <button
                onClick={() => {
                  setSlideType("reviews");
                  setActiveSlide(0);
                }}
                className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
                  slideType === "reviews"
                    ? "bg-white text-[#3D9970] shadow-sm"
                    : "text-gray-400 hover:text-[#2F3542]"
                }`}
              >
                Student Reviews
              </button>

            </div>

            {/* Slider Card */}
            <div className="min-h-[390px] rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_25px_70px_rgba(47,53,66,0.10)]">

              {slideType === "jobs" ? (
                <div key={activeSlide} className="animate-[fadeIn_0.5s_ease-in-out]">

                  {/* Top */}
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-sm font-medium text-gray-400">
                        Featured opportunity
                      </p>

                      <h2 className="mt-1 text-xl font-bold text-[#2F3542]">
                        Student-friendly jobs
                      </h2>
                    </div>

                    <span className="rounded-full bg-[#EAF7F1] px-3 py-1.5 text-xs font-semibold text-[#3D9970]">
                      New
                    </span>

                  </div>

                  {/* Job */}
                  <div className="mt-8">

                    <div className="flex items-start gap-4">

                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-bold ${
                          jobs[activeSlide].color === "blue"
                            ? "bg-[#F0F6FF] text-[#0454D9]"
                            : "bg-[#EAF7F1] text-[#3D9970]"
                        }`}
                      >
                        {jobs[activeSlide].logo}
                      </div>

                      <div className="flex-1">

                        <h3 className="text-xl font-bold text-[#2F3542]">
                          {jobs[activeSlide].title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                          {jobs[activeSlide].company}
                        </p>

                      </div>

                    </div>

                    {/* Job Details */}
                    <div className="mt-8 grid grid-cols-2 gap-3">

                      <div className="rounded-xl bg-gray-50 p-4">
                        <p className="text-xs text-gray-400">
                          Location
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#2F3542]">
                          📍 {jobs[activeSlide].location}
                        </p>
                      </div>

                      <div className="rounded-xl bg-gray-50 p-4">
                        <p className="text-xs text-gray-400">
                          Job Type
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#2F3542]">
                          {jobs[activeSlide].type}
                        </p>
                      </div>

                    </div>

                    {/* Salary */}
                    <div className="mt-3 flex items-center justify-between rounded-xl border border-[#3D9970]/10 bg-[#EAF7F1] p-4">

                      <div>
                        <p className="text-xs text-gray-400">
                          Expected earnings
                        </p>

                        <p className="mt-1 text-lg font-bold text-[#3D9970]">
                          {jobs[activeSlide].salary}
                        </p>
                      </div>

                      <Link
                        href="/jobs"
                        className="rounded-lg bg-[#3D9970] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#327F5D]"
                      >
                        View Job
                      </Link>

                    </div>

                  </div>

                </div>
              ) : (
                <div key={activeSlide} className="animate-[fadeIn_0.5s_ease-in-out]">

                  <p className="text-sm font-medium text-gray-400">
                    What students say
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-[#2F3542]">
                    Real experiences from students
                  </h2>

                  {/* Stars */}
                  <div className="mt-8 flex gap-1 text-[#3D9970]">
                    {[...Array(reviews[activeSlide].rating)].map(
                      (_, index) => (
                        <span key={index}>★</span>
                      )
                    )}
                  </div>

                  {/* Review */}
                  <blockquote className="mt-5 text-xl font-medium leading-8 text-[#2F3542]">
                    “{reviews[activeSlide].review}”
                  </blockquote>

                  {/* Student */}
                  <div className="mt-8 flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F6FF] font-bold text-[#0454D9]">
                      {reviews[activeSlide].initials}
                    </div>

                    <div>
                      <p className="font-semibold text-[#2F3542]">
                        {reviews[activeSlide].name}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {reviews[activeSlide].role}
                      </p>
                    </div>

                  </div>

                  {/* Review Highlight */}
                  <div className="mt-8 rounded-xl bg-[#F0F6FF] p-4">
                    <p className="text-sm text-[#0454D9]">
                      ✓ Flexible work
                      <span className="mx-2 text-gray-300">•</span>
                      ✓ Student friendly
                      <span className="mx-2 text-gray-300">•</span>
                      ✓ Real experience
                    </p>
                  </div>

                </div>
              )}

            </div>

            {/* Slider indicators */}
            <div className="mt-6 flex justify-center gap-2">

              {(slideType === "jobs" ? jobs : reviews).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index
                      ? slideType === "jobs"
                        ? "w-7 bg-[#0454D9]"
                        : "w-7 bg-[#3D9970]"
                      : "w-2 bg-gray-200"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

