import express from "express";
import {
  setCookie,
  getCookie,
  delCookie
} from "../controllers/cookieController.js";

const router = express.Router();

router.get("/set", setCookie);
router.get("/get", getCookie);
router.get("/del", delCookie);
// router.get("/update", updateCookie);

export default router;