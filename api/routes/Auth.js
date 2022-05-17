import express from "express";
const router = express.Router(); 
import { login } from "../controllers/auth.js";

// tạo api để login vào trang web

router.post("/", login)

export default router

