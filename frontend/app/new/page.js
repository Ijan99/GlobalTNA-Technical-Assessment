"use client";

import { useState } from "react";
import API from "../../services/api";
import { useRouter } from "next/navigation";

export default function NewJob() {
  const router = useRouter();

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
    await API.post("/jobs", form);
    router.push("/");
  };

  return (
    <form onSubmit={submit} className="p-6 space-y-3">
      <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 w-full" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full" />
      <input name="category" placeholder="Category" onChange={handleChange} className="border p-2 w-full" />
      <input name="location" placeholder="Location" onChange={handleChange} className="border p-2 w-full" />
      <input name="contactName" placeholder="Name" onChange={handleChange} className="border p-2 w-full" />
      <input name="contactEmail" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />

      <button className="bg-green-500 text-white p-2">
        Create Job
      </button>
    </form>
  );
}