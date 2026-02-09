import express from "express";
import { saveContact, fetchContact } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/save", saveContact);
router.get("/fetch", fetchContact);

export default router;
