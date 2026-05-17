"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import { useParams, useRouter } from "next/navigation";

export default function JobDetail() {
  const { id } = useParams();
  const router = useRouter();

  const [job, setJob] = useState(null);

  const fetchJob = async () => {
    try {
      const res = await API.get(`/jobs/${id}`);
      setJob(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) fetchJob();
  }, [id]);

  const updateStatus = async (status) => {
    try {
      await API.patch(`/jobs/${id}`, { status });
      fetchJob();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async () => {
    try {
      await API.delete(`/jobs/${id}`);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!job) {
    return (
      <div className="max-w-2xl mx-auto p-6 mt-10 text-center text-gray-500">
        Loading job details...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      
      {/* Main Card */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-5">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          {job.title}
        </h1>

        {/* Status Badge */}
        <span
          className={`inline-block px-3 py-1 text-sm rounded-full ${
            job.status === "Open"
              ? "bg-green-100 text-green-700"
              : job.status === "In Progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {job.status}
        </span>

        {/* Details */}
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">📝 Description:</span>{" "}
            {job.description}
          </p>

          <p>
            <span className="font-semibold">📂 Category:</span>{" "}
            {job.category}
          </p>

          <p>
            <span className="font-semibold">📍 Location:</span>{" "}
            {job.location}
          </p>

          <p>
            <span className="font-semibold">👤 Contact Name:</span>{" "}
            {job.contactName}
          </p>

          <p>
            <span className="font-semibold">📧 Contact Email:</span>{" "}
            {job.contactEmail}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">

          <select
            value={job.status}
            onChange={(e) => updateStatus(e.target.value)}
            className="border p-2 rounded-lg w-full sm:w-auto text-gray-600"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>

          <button
            onClick={deleteJob}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
          >
            Delete Job
          </button>

          <button
            onClick={() => router.push("/")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg transition"
          >
            Back
          </button>

        </div>
      </div>
    </div>
  );
}