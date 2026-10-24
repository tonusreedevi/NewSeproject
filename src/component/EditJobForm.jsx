
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditJobForm({ job, id }) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    jobTitle: job.jobTitle || job.title || "",
    company: job.company || job.companyName || "",
    jobDescription: job.jobDescription || job.description || "",
    jobType: job.jobType || job.type || "Part-time",
    area: job.area || job.location || "",
    payment: job.payment || "",
    time: job.time || "",
    day: job.day || "",
    deadline: job.deadline || "",
    phone: job.phone || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`http://localhost:5000/job/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update job");
      }

      setMessage("Job updated successfully!");
      setShowForm(false);
      router.refresh();
    } catch (error) {
      setMessage(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-[#d6d0c4] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#0454d9]";

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setShowForm(!showForm)}
        className="bg-[#0454d9] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0344ad]"
      >
        {showForm ? "Cancel Editing" : "Edit Job"}
      </button>

      {message && (
        <p className="mt-3 text-sm font-semibold text-[#0454d9]">
          {message}
        </p>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-5 border border-[#d6d0c4] bg-[#fffdf7] p-4 sm:p-6"
        >
          <h2 className="mb-5 border-b-2 border-double border-black pb-3 font-serif text-2xl font-bold">
            Edit Job Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Job Title
              <input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </label>

            <label className="text-sm font-semibold">
              Company Name
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold">
              Job Type
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Part-time</option>
                <option>Full-time</option>
                <option>Remote</option>
                <option>Internship</option>
                <option>Freelance</option>
              </select>
            </label>

            <label className="text-sm font-semibold">
              Location
              <input
                name="area"
                value={formData.area}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold">
              Payment (BDT)
              <input
                name="payment"
                type="number"
                min="0"
                value={formData.payment}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold">
              Working Hours
              <input
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold">
              Working Days
              <input
                name="day"
                value={formData.day}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold">
              Application Deadline
              <input
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold sm:col-span-2">
              Employer Phone
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold sm:col-span-2">
              Job Description
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows={5}
                className={inputClass}
                required
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 bg-[#0454d9] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0344ad] disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Job"}
          </button>
        </form>
      )}
    </div>
  );
}
