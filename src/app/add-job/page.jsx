
"use client";

import React, { useRef } from "react";
import {
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Button,
} from "react-aria-components";

const AddJobs = () => {
  const submitting = useRef(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (submitting.current) return;

    submitting.current = true;

    // Store the form before the asynchronous request
    const form = e.currentTarget;

    const formData = new FormData(form);
    const job = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://newprojectserver.vercel.app/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Job added successfully!");

        // Refresh the page after successful submission
        window.location.reload();
      } else {
        alert(data.message || "Failed to add job");
        submitting.current = false;
      }
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Something went wrong!");
      submitting.current = false;
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-4 py-10 text-[#2F3542] md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-[#0454d9]">
            HireMe
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Add a New Job
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Post a part-time job and help students find flexible work
            opportunities.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          {/* Job Information */}
          <section className="border-b border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                Job Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Provide the basic information about the job.
              </p>
            </div>

            <div className="space-y-5">
              {/* Job Title */}
              <TextField
                name="jobTitle"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Job Title
                </Label>

                <Input
                  placeholder="e.g. Part-time Restaurant Assistant"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>

              {/* Job Description */}
              <TextField
                name="jobDescription"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Job Description
                </Label>

                <TextArea
                  placeholder="Describe the job responsibilities and requirements..."
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>
          </section>

          {/* Location & Contact */}
          <section className="border-b border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                Location & Contact
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Let students know where the job is and how to contact you.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Area */}
              <TextField
                name="area"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Area / Location
                </Label>

                <Input
                  placeholder="e.g. GEC Circle, Chattogram"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>

              {/* Phone */}
              <TextField
                name="phone"
                type="tel"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Phone Number
                </Label>

                <Input
                  type="tel"
                  placeholder="e.g. 01XXXXXXXXX"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>
          </section>

          {/* Payment & Schedule */}
          <section className="border-b border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                Payment & Schedule
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Add payment, working schedule, and application deadline.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Payment */}
              <TextField
                name="payment"
                type="number"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Payment
                </Label>

                <Input
                  type="number"
                  min="0"
                  placeholder="e.g. 8000"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <p className="text-xs text-gray-400">
                  Enter payment amount in BDT.
                </p>

                <FieldError className="text-sm text-red-500" />
              </TextField>

              {/* Working Time */}
              <TextField
                name="time"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Working Time
                </Label>

                <Input
                  type="text"
                  placeholder="e.g. 4:00 PM - 8:00 PM"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>

              {/* Working Day */}
              <TextField
                name="day"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Working Day
                </Label>

                <Input
                  placeholder="e.g. Friday & Saturday"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <FieldError className="text-sm text-red-500" />
              </TextField>

              {/* Application Deadline */}
              <TextField
                name="deadline"
                type="date"
                isRequired
                className="flex flex-col gap-2"
              >
                <Label className="text-sm font-medium">
                  Application Deadline
                </Label>

                <Input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#0454d9] focus:ring-1 focus:ring-[#0454d9]"
                />

                <p className="text-xs text-gray-400">
                  Students can apply until this date.
                </p>

                <FieldError className="text-sm text-red-500" />
              </TextField>
            </div>
          </section>

          {/* Submit */}
          <div className="flex flex-col gap-4 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <div>
              <p className="text-sm font-medium">
                Ready to post your job?
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Make sure all information is correct before posting.
              </p>
            </div>

            <Button
              type="submit"
              isDisabled={submitting.current}
              className="rounded-lg bg-[#0454d9] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#0344ad] focus:outline-none"
            >
              Add Job
            </Button>
          </div>
        </form>

        <p className="mt-5 text-center text-xs text-gray-400">
          HireMe • Find Jobs • Build Experience
        </p>
      </div>
    </main>
  );
};

export default AddJobs;
