// import React from 'react'

// const AllJobsPage =  async() => {
//    const res =fetch('http://localhost:5000/job')
//    const jobs = await (await res).json()
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AllJobsPage
import React from "react";
import Link from "next/link";


const AllJobsPage = async () => {
  const res = await fetch("https://newprojectserver.vercel.app/job", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const jobs = await res.json();

  return (
    <section className="min-h-screen bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Find Your Opportunity
          </p>

          <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Explore All Jobs
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Discover flexible part-time jobs and find the right opportunity
            to grow your skills and career.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-600" />
        </div>

        {/* Job count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Available Opportunities
          </h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {jobs.length} Jobs
          </span>
        </div>

        {/* Job Cards */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <div
                key={job._id || index}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                {/* Company and Job Type */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl font-bold text-blue-600">
                    {(job.company || job.companyName || job.title || "J")
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                    {job.jobType || job.type || "Part-time"}
                  </span>
                </div>

                {/* Job Information */}
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
                  {job.title || job.jobTitle || "Untitled Job"}
                </h3>

                <p className="mb-4 text-sm font-medium text-gray-500">
                  {job.company || job.companyName || "Company"}
                </p>

                <div className="mb-5 space-y-3 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{job.location || "Location not specified"}</span>
                  </p>

                  <p className="flex items-center gap-2">
                    <span>💰</span>
                    <span>
                      {job.salary
                        ? `Salary: ${job.salary}`
                        : "Salary not specified"}
                    </span>
                  </p>

                  {job.deadline && (
                    <p className="flex items-center gap-2">
                      <span>📅</span>
                      <span>Deadline: {job.deadline}</span>
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="mb-6 line-clamp-3 flex-grow text-sm leading-6 text-gray-500">
                  {job.description ||
                    job.details ||
                    "Explore this opportunity to gain experience and develop your skills."}
                </p>

                {/* Details Button */}
                <Link
                  href={`/all-jobs/${job._id}`}
                  className="mt-auto block rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details 
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mb-4 text-5xl">💼</div>

            <h3 className="text-xl font-bold text-gray-800">
              No Jobs Available Yet
            </h3>

            <p className="mt-2 text-gray-500">
              Please check back later for new opportunities.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllJobsPage;