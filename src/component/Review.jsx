
import React from "react";

const reviews = [
  {
    name: "Nusrat Jahan",
    role: "University Student",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review:
      "HireMe helped me find a part-time job that fits well with my university schedule.",
  },
  {
    name: "Rafi Ahmed",
    role: "CSE Student",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "The platform is simple to use and helped me find an opportunity related to my interests.",
  },
  {
    name: "Sadia Rahman",
    role: "BBA Student",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    review:
      "I really like the flexible job options. It makes balancing work and studies easier.",
  },
];

const Review = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0454D9]">
            Student Reviews
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#2F3542] md:text-4xl">
            What students are saying
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Students use HireMe to discover flexible opportunities and gain
            valuable work experience.
          </p>
        </div>

        {/* Rating */}
        <div className="mx-auto mt-10 flex w-fit items-center gap-5 rounded-2xl border border-gray-100 bg-white px-7 py-4 shadow-sm">

          <div>
            <p className="text-center text-3xl font-bold text-[#2F3542]">
              4.8
            </p>

            <div className="mt-1 text-sm tracking-wide text-[#3D9970]">
              ★★★★★
            </div>
          </div>

          <div className="h-10 w-px bg-gray-200" />

          <div>
            <p className="text-sm font-semibold text-[#2F3542]">
              Student Rating
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Based on student feedback
            </p>
          </div>

        </div>

        {/* Review Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_10px_35px_rgba(47,53,66,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(47,53,66,0.10)]"
            >

              {/* Stars */}
              <div className="text-sm tracking-wide text-[#3D9970]">
                {"★".repeat(item.rating)}
              </div>

              {/* Review */}
              <p className="mt-5 min-h-[90px] text-sm leading-7 text-gray-500">
                “{item.review}”
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold text-[#2F3542]">
                    {item.name}
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Review;

