"use client";

import { useEffect, useState } from "react";
import API from "../services/api";
import Link from "next/link";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.get("/jobs", {
        params: category ? { category } : {},
      });

      setJobs(res.data || []);
    } catch (err) {
      console.log(err);
      setError("Failed to load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [category]);

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Service Request Board
        </h1>
        <p className="text-gray-600">
          Browse and manage service requests
        </p>
      </div>

      {/* FILTER */}
      <div className="mb-6">
        <select
          className="border p-2 rounded-md w-48 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Painting">Painting</option>
        </select>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-600 animate-pulse">
          Loading jobs...
        </p>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-red-500">
          <p>{error}</p>
          <button
            onClick={fetchJobs}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      )}

      {/* JOB LIST */}
      {!loading && !error && (
        <div className="grid gap-4">
          {jobs.length === 0 ? (
            <p className="text-gray-600">
              No service requests found.
            </p>
          ) : (
            jobs.map((job) => (
              <Link
                key={job._id}
                href={`/job/${job._id}`}
                className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <h2 className="font-semibold text-lg text-gray-600">
                  {job.title}
                </h2>

                <p className="text-gray-600 mt-1">
                  📍 {job.location || "No location"}
                </p>

                <p className="text-gray-700 text-sm mt-1">
                  {job.category || "Uncategorized"}
                </p>

                <span
                  className={`inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium ${
                    job.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : job.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {job.status}
                </span>
              </Link>
            ))
          )}
        </div>
      )}

      {/* FLOAT BUTTON */}
      <Link
        href="/new"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg font-medium"
      >
        + New Request
      </Link>

    </div>
  );
}