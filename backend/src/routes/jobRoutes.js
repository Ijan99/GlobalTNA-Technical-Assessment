import express from "express";

import {
  getJobs,
  getJobById,
  createJob,
  updateJobStatus,
  deleteJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/", getJobs);

router.get("/:id", getJobById);

router.post("/", createJob);

router.patch("/:id", updateJobStatus);

router.delete("/:id", deleteJob);

export default router;