import React from "react";

const Vision = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#0454D9]">
              Our Vision
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-[#2F3542] md:text-4xl">
              Making part-time work
              <span className="text-[#0454D9]"> easier for students.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-500">
              We envision a platform where students can find flexible work
              opportunities without having to compromise their education.
              HireMe connects students with opportunities that help them earn,
              learn, and gain valuable real-world experience.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-500">
              Whether a student wants to earn extra income, develop new skills,
              or gain experience related to their interests, HireMe aims to
              make finding the right opportunity simple and accessible.
            </p>

          </div>

          {/* Right Side */}
          <div className="relative">

            <div className="rounded-3xl bg-[#F0F6FF] p-8 md:p-10">

              <div className="grid gap-5 sm:grid-cols-2">

                {/* Earn */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7F1] text-xl">
                    💰
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2F3542]">
                    Earn
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Find flexible opportunities that can help students earn
                    while studying.
                  </p>
                </div>

                {/* Learn */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F6FF] text-xl">
                    📚
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2F3542]">
                    Learn
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Gain practical knowledge and experience outside the
                    classroom.
                  </p>
                </div>

                {/* Grow */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF7F1] text-xl">
                    📈
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2F3542]">
                    Grow
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Develop skills and experience that can support future
                    career goals.
                  </p>
                </div>

                {/* Connect */}
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F6FF] text-xl">
                    🤝
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#2F3542]">
                    Connect
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Connect students with employers and meaningful work
                    opportunities.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Vision;

