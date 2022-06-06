
import {
    updateSalary,
    deleteSalary,
    getSalary,
    getSalarys,
    createSalary,
    getSalaryLimit
  } from "../controllers/salary.js";
  import { verifyAdmin,  verifyUser } from "../utils/verifyToken.js";
  
  import express from "express";
  const router = express.Router();
  //CREATE 
  router.post("/:userid",  createSalary)
  
  //UPDATE
  router.put("/:id/update",updateSalary);
  
  //DELETE
  router.delete("/:id/delete",deleteSalary);
  
  //get Salary limit 5 
  router.get("/limited",getSalaryLimit)
  
  //GET
  router.get("/find/:id", getSalary);
  
  //GET ALL
  router.get("/",  getSalarys);
  export default router;
  