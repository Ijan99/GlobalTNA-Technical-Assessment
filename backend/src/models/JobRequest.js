import mongoose from "mongoose";
import validator from "validator";

const jobRequestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
    },

    location: {
      type: String,
    },

    contactName: {
      type: String,
    },

    contactEmail: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email",
      },
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Closed"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

const JobRequest = mongoose.model("JobRequest", jobRequestSchema);

export default JobRequest;