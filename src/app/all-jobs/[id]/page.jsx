
import React from "react";
import Link from "next/link";

const JobDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/job/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <main className="min-h-screen bg-[#f4f1e9] px-4 py-10 text-[#252525]">
        <div className="mx-auto max-w-xl border-y-2 border-black py-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            HireMe Daily
          </p>
          <h1 className="mt-4 font-serif text-3xl font-black">
            Job Not Found
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            This job may have been removed or is no longer available.
          </p>
          <Link
            href="/all-jobs"
            className="mt-6 inline-block bg-[#0454d9] px-5 py-2.5 text-sm text-white"
          >
            Back to All Jobs
          </Link>
        </div>
      </main>
    );
  }

  const job = await res.json();

  const title = job.jobTitle || job.title || "Untitled Position";
  const description =
    job.jobDescription ||
    job.description ||
    "No job description has been provided.";

  return (
    <main className="min-h-screen bg-[#f4f1e9] px-3 py-5 text-[#252525] sm:px-5 sm:py-7">
      <article className="mx-auto max-w-4xl border border-[#d6d0c4] bg-[#fffdf7] px-4 py-5 shadow-sm sm:px-7 sm:py-7 md:px-9">
        {/* Newspaper Masthead */}
        <header className="border-b-4 border-double border-black pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black pb-2 text-[9px] font-bold uppercase tracking-wider sm:text-[10px]">
            <span>Student Careers & Opportunities</span>
            <span>Special Jobs Edition</span>
          </div>

          <div className="py-4 text-center">
            <p className="font-serif text-[10px] font-bold uppercase tracking-[0.25em] text-[#0454d9]">
              HireMe Presents
            </p>

            <h1 className="mt-1 font-serif text-4xl font-black tracking-tight sm:text-5xl">
              New Jobs
            </h1>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest sm:text-xs">
              Your Future. Your Opportunity.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black pt-2 text-[9px] font-semibold uppercase tracking-wider sm:text-[10px]">
            <span>Employment Gazette</span>
            <span>Job Report No. {String(id).slice(-8)}</span>
            <span>Student Edition</span>
          </div>
        </header>

        {/* Job Heading */}
        <section className="border-b border-black py-5 sm:py-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="bg-[#0454d9] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Job Vacancy
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
              {job.jobType || job.type || "Part-time Opportunity"}
            </span>
          </div>

          <h2 className="max-w-3xl font-serif text-3xl font-black leading-tight sm:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-2xl font-serif text-sm leading-6 text-gray-600 sm:text-base">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-gray-300 pt-3 text-[10px] font-semibold uppercase tracking-wide text-gray-600 sm:text-xs">
            <span>Location: {job.area || job.location || "Not specified"}</span>
            <span>Payment: BDT {job.payment || "Negotiable"}</span>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid gap-6 py-5 sm:py-6 md:grid-cols-[1fr_230px] md:gap-7">
          {/* Main Article */}
          <section>
            <h3 className="mb-3 border-b-2 border-black pb-2 font-serif text-xl font-bold">
              Inside This Opportunity
            </h3>

            <div className="columns-1 gap-5 font-serif text-sm leading-6 text-gray-700 sm:columns-2">
        
              <p className="mb-4 break-inside-avoid">{description}</p>

              <p className="mb-4 break-inside-avoid">
                Interested applicants should review the working schedule,
                payment information, location, and application deadline
                carefully before contacting the employer.
              </p>
            </div>

            {/* Position Details */}
            <div className="mt-5 border-y border-gray-300 py-4">
              <h3 className="mb-4 font-serif text-lg font-bold">
                Position at a Glance
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: "Working Hours", value: job.time },
                  { label: "Working Days", value: job.day },
                  {
                    label: "Compensation",
                    value: job.payment ? `৳${job.payment} BDT` : null,
                  },
                  { label: "Application Deadline", value: job.deadline },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-l-[3px] border-[#0454d9] pl-3"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-1 font-serif text-base font-bold">
                      {item.value || "Not specified"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Instructions */}
            <section className="mt-5">
              <h3 className="mb-3 font-serif text-xl font-bold">
                How to Apply
              </h3>

              <p className="font-serif text-sm leading-6 text-gray-700">
                Candidates interested in this position can contact the
                employer using the contact information provided alongside
                this listing. Please confirm the job requirements and
                working arrangements before proceeding.
              </p>

              {job.phone && (
                <div className="mt-4 border border-gray-300 bg-[#f8f5ed] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Employer Contact
                  </p>

                  <p className="mt-2 font-serif text-lg font-bold">
                    {job.phone}
                  </p>

                  <a
                    href={`tel:${job.phone}`}
                    className="mt-3 inline-block border border-[#0454d9] px-4 py-2 text-xs font-bold text-[#0454d9] transition hover:bg-[#0454d9] hover:text-white"
                  >
                    Contact Employer →
                  </a>
                </div>
              )}
            </section>
          </section>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="border-y-2 border-black py-4">
              <p className="text-center text-[10px] font-bold uppercase tracking-widest">
                Featured Listing
              </p>

              <div className="my-4 border border-gray-300 bg-[#f4f1e9] p-4 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0454d9] font-serif text-2xl font-black text-white">
                  {(job.jobTitle || job.title || "J")
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <h3 className="mt-3 font-serif text-lg font-bold">
                  {job.company || job.companyName || "Hiring Employer"}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-600">
                  An opportunity to gain experience and develop professional
                  skills.
                </p>
              </div>
            </div>

            <div className="border border-gray-300 p-4">
              <h3 className="border-b border-black pb-2 font-serif text-lg font-bold">
                Quick Facts
              </h3>

              <dl className="divide-y divide-gray-300">
                {[
                  { label: "Position", value: title },
                  {
                    label: "Location",
                    value: job.area || job.location || "Not specified",
                  },
                  {
                    label: "Employment Type",
                    value: job.jobType || job.type || "Part-time",
                  },
                  {
                    label: "Deadline",
                    value: job.deadline || "Not specified",
                  },
                ].map((item) => (
                  <div key={item.label} className="py-2.5">
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-[#e8edf7] p-4">
              <h3 className="font-serif text-lg font-bold">
                Looking for More?
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-600">
                Explore more opportunities and find a position that fits
                your schedule.
              </p>

              <Link
                href="/all-jobs"
                className="mt-4 block bg-[#0454d9] px-3 py-2.5 text-center text-xs font-bold text-white transition hover:bg-[#0344ad]"
              >
                Browse All Jobs →
              </Link>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="border-t-4 border-double border-black pt-4 text-center">
          <p className="font-serif text-xl font-black tracking-widest">
           HIREME
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
            Connecting Students With Opportunities
          </p>

          <div className="mt-4 border-t border-black pt-3">
            <Link
              href="/all-jobs"
              className="text-xs font-bold text-[#0454d9] hover:underline"
            >
              Return to All Jobs
            </Link>
             
          </div>

          <Link
    href={`/edit-job/${id}`}
    className="inline-block border border-[#0454d9] bg-[#0454d9] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#0344ad]"
  >
    Edit Job →
  </Link>
        </footer>
      </article>
    </main>
  );
};

export default JobDetailsPage;
