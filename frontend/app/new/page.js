"use client";

import { useState } from "react";
import API from "../../services/api";
import { useRouter } from "next/navigation";

export default function NewJob() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    contactName: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await API.post("/jobs", form);
      router.push("/");
    } catch (error) {
      alert("Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 text-gray-600">
      
      <div className="bg-white p-6 rounded-xl shadow-md text-gray-600">
        
        <h1 className="text-2xl font-bold mb-6 text-gray-600">
          Create New Service Request
        </h1>

        <form onSubmit={submit} className="space-y-4">

          <input
            name="title"
            placeholder="Job Title (e.g. Need plumber for leaking tap)"
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <textarea
            name="description"
            placeholder="Describe the issue in detail"
            onChange={handleChange}
            className="border p-3 w-full rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            name="category"
            placeholder="Category (Plumbing, Electrical, etc.)"
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="location"
            placeholder="Location (e.g. Colombo, Maharagama)"
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="contactName"
            placeholder="Your Name"
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="contactEmail"
            placeholder="Your Email"
            type="email"
            onChange={handleChange}
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-3 rounded-lg w-full hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Job Request"}
          </button>

        </form>
      </div>
    </div>
  );
}