
import React from "react";
import Link from "next/link";

const JobDetailsPage = async ({ params }) => {
  const { id } = await params;

  let job = null;

  // Fetch job details from the backend
  try {
    const res = await fetch(
      `https://newprojectserver.vercel.app/job/${id}`,
      {
        cache: "no-store",
      }
    );

    if (res.ok) {
      job = await res.json();
    }
  } catch (error) {
    console.error("Unable to fetch job details:", error);
  }

  // Job not found
  if (!job || typeof job !== "object") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 text-slate-900">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl font-bold text-[#0454d9]">
            !
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0454d9]">
            HireMe Careers
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
            Job not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            This listing may have been removed, expired, or is temporarily
            unavailable. Please browse the available jobs.
          </p>

          <Link
            href="/all-jobs"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#0454d9] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            Browse All Jobs
          </Link>
        </div>
      </main>
    );
  }

  // Get job information safely
  const title = job.jobTitle || job.title || "Untitled Position";

  const description =
    job.jobDescription ||
    job.description ||
    "No job description has been provided.";

  const company = job.company || job.companyName || "Hiring Employer";

  const location = job.area || job.location || "Location not specified";

  const jobType = job.jobType || job.type || "Part-time";

  const payment =
    job.payment !== undefined &&
    job.payment !== null &&
    String(job.payment).trim() !== ""
      ? `৳${job.payment} BDT`
      : "Negotiable";

  const deadline = job.deadline || "Not specified";

  const initial = String(company).trim().charAt(0).toUpperCase() || "H";

  const details = [
    {
      label: "Working Hours",
      value: job.time || "Not specified",
      icon: "◷",
    },
    {
      label: "Working Days",
      value: job.day || "Not specified",
      icon: "▦",
    },
    {
      label: "Salary / Payment",
      value: payment,
      icon: "৳",
    },
    {
      label: "Application Deadline",
      value: deadline,
      icon: "▤",
    },
  ];

  const quickFacts = [
    {
      label: "Position",
      value: title,
    },
    {
      label: "Company",
      value: company,
    },
    {
      label: "Location",
      value: location,
    },
    {
      label: "Employment Type",
      value: jobType,
    },
    {
      label: "Application Deadline",
      value: deadline,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
     

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-[#0454d9]">
            Home
          </Link>

          <span>/</span>

          <Link
            href="/all-jobs"
            className="transition hover:text-[#0454d9]"
          >
            All Jobs
          </Link>

          <span>/</span>

          <span className="font-medium text-slate-800">Job Details</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Job Header */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-2 bg-[#0454d9]" />

              <div className="p-6 sm:p-9">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  {/* Company Avatar */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl font-extrabold text-[#0454d9]">
                    {initial}
                  </div>

                  {/* Job Title and Company */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0454d9]">
                        {jobType}
                      </span>

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Job Opportunity
                      </span>
                    </div>

                    <h1 className="mt-4 break-words text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                      {title}
                    </h1>

                    <p className="mt-3 text-base font-semibold text-slate-600">
                      {company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        <span className="text-lg text-[#0454d9]">⌖</span>
                        {location}
                      </span>

                      <span className="flex items-center gap-2">
                        <span className="text-lg text-[#0454d9]">৳</span>
                        {payment}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
                  <a
                    href={
                      job.phone
                        ? `tel:${String(job.phone).replace(/[^\d+]/g, "")}`
                        : undefined
                    }
                    aria-disabled={!job.phone}
                    className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition ${
                      job.phone
                        ? "bg-[#0454d9] text-white shadow-sm shadow-blue-200 hover:bg-blue-800"
                        : "cursor-not-allowed bg-slate-200 text-slate-500"
                    }`}
                  >
                    {job.phone ? "Contact Employer" : "Contact Unavailable"}
                  </a>

                  <Link
                    href="/all-jobs"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#0454d9] hover:text-[#0454d9]"
                  >
                    Browse Other Jobs
                  </Link>
                </div>

                {!job.phone && (
                  <p className="mt-3 text-xs text-slate-500">
                    The employer has not provided a contact number.
                  </p>
                )}
              </div>
            </div>

            {/* Job Description */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-[#0454d9]">
                  ☰
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    About This Job
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Position overview and responsibilities
                  </p>
                </div>
              </div>

              <div className="mt-7 whitespace-pre-line break-words text-sm leading-8 text-slate-600 sm:text-base">
                {description}
              </div>
            </section>

            {/* Job Information Cards */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Job Information
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Important details about this opportunity
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-[#0454d9] shadow-sm">
                        {detail.icon}
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {detail.label}
                        </p>

                        <p className="mt-2 break-words text-sm font-bold text-slate-800">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6">
            {/* Salary Card */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-[#0454d9] p-6 text-white">
                <p className="text-sm font-medium text-blue-100">
                  Salary / Payment
                </p>

                <p className="mt-3 break-words text-3xl font-extrabold">
                  {payment}
                </p>

                <p className="mt-2 text-sm text-blue-100">
                  Compensation for this position
                </p>
              </div>

              <div className="p-6">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Job Overview
                </h2>

                <div className="mt-5 space-y-5">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col gap-1 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {fact.label}
                      </p>

                      <p className="break-words text-sm font-semibold leading-6 text-slate-700">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={
                    job.phone
                      ? `tel:${String(job.phone).replace(/[^\d+]/g, "")}`
                      : undefined
                  }
                  aria-disabled={!job.phone}
                  className={`mt-7 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    job.phone
                      ? "bg-[#0454d9] text-white hover:bg-blue-800"
                      : "cursor-not-allowed bg-slate-200 text-slate-500"
                  }`}
                >
                  {job.phone ? "Contact to Apply" : "Contact Unavailable"}
                </a>
              </div>
            </div>

            {/* Student Notice */}
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#0454d9] shadow-sm">
                  ✓
                </span>

                <div>
                  <h3 className="font-extrabold text-slate-900">
                    For Students
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Find opportunities that fit your studies, schedule, and
                    skills. Confirm the job details with the employer before
                    accepting an offer.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Jobs */}
            <Link
              href="/all-jobs"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700 transition hover:border-[#0454d9] hover:text-[#0454d9]"
            >
              <span>←</span>
              Back to All Jobs
            </Link>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <Link href="/" className="text-lg font-extrabold text-slate-900">
            Hire<span className="text-[#0454d9]">Me</span>
          </Link>

          <p className="text-sm text-slate-500">
            Helping students find flexible job opportunities in Bangladesh.
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} HireMe
          </p>
        </div>
      </footer>
    </main>
  );
};

export default JobDetailsPage;
