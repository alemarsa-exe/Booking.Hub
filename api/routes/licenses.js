import express from "express";
import { createLicense, deleteLicense, getAllLicenses, getLicense, updateLicense } from "../controllers/licenseController.js";

import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createLicense);


//UPDATE
router.put("/:id", updateLicense);


//DELETE
router.delete("/:id", deleteLicense);


//GET
router.get("/find/:id", getLicense);


//GET ALL
router.get("/", getAllLicenses);

export default router