"use client";

import Link from "next/link";

const divisions = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Simple background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0454D9]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#3D9970]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left side: Main message */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0454D9]/10 bg-[#F0F6FF] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#3D9970]" />
              <span className="text-sm font-semibold text-[#0454D9]">
                Made for Students in Bangladesh
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-[1.12] tracking-tight text-[#2F3542] sm:text-6xl lg:text-7xl">
              Study well.
              <span className="mt-2 block text-[#0454D9]">
                Earn on your own.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-500 sm:text-lg">
              Find part-time jobs that fit your class schedule.
              Earn money, learn new skills, and get work experience
              while you continue your studies.
            </p>

            <div className="mt-8">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-3 rounded-xl bg-[#0454D9] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0349BE]"
              >
                Explore Jobs
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-[#3D9970]">✓</span>
                Flexible work
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#3D9970]">✓</span>
                Student-friendly jobs
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#3D9970]">✓</span>
                Learn while you earn
              </span>
            </div>
          </div>

          {/* Right side: Minimal Bangladesh divisions design */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#0454D9]/10 bg-[#F0F6FF]/70 p-7 sm:p-10 lg:p-12">

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#0454D9]/10" />
              <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#3D9970]/20" />
              <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#3D9970]/5" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3D9970]">
                  Across Bangladesh
                </p>

                <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight text-[#2F3542] sm:text-4xl">
                  Opportunities for students, everywhere.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                  From your hometown to a new city, find work opportunities
                  while staying focused on your education.
                </p>

                {/* All seven divisions */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {divisions.map((division, index) => (
                    <div
                      key={division}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                        index === 0
                          ? "border-[#0454D9]/15 bg-white text-[#0454D9]"
                          : "border-white bg-white/60 text-[#2F3542] hover:border-[#3D9970]/30 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full ${
                          index === 0
                            ? "bg-[#0454D9]"
                            : "bg-[#3D9970]"
                        }`}
                      />
                      {division}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-[#0454D9]/10 pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3D9970]/10 text-xl text-[#3D9970]">
                    <span aria-hidden="true">✳</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2F3542]">
                      Your skills. Your time. Your future.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Start building experience while you study.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small decorative accent */}
            <div className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-full bg-[#3D9970]/15 blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;