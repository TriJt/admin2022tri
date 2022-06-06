
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  createUser,
  getUserLimit,
  CountUser
} from "../controllers/user.js";
import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";

import express from "express";
const router = express.Router();

//count user
router.get("/count", CountUser)
//CREATE 
router.post("/:shipid",  createUser)

//UPDATE
router.put("/:id/update",updateUser);

//DELETE
router.delete("/:id/delete",deleteUser);

//get user limit 5 
router.get("/limited",getUserLimit)

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/",  getUsers);
export default router;
