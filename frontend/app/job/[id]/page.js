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
    fetchJob();
  }, []);

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
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-6 border rounded-lg shadow-sm space-y-4">
      <h1 className="text-3xl font-bold">{job.title}</h1>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {job.description}
        </p>

        <p>
          <span className="font-semibold">Category:</span>{" "}
          {job.category}
        </p>

        <p>
          <span className="font-semibold">Location:</span>{" "}
          {job.location}
        </p>

        <p>
          <span className="font-semibold">Contact Name:</span>{" "}
          {job.contactName}
        </p>

        <p>
          <span className="font-semibold">Contact Email:</span>{" "}
          {job.contactEmail}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          {job.status}
        </p>
      </div>

      <div className="flex gap-3 pt-4">
        <select
          value={job.status}
          onChange={(e) => updateStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <button
          onClick={deleteJob}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}