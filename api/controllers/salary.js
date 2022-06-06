import Salary from "../models/Salary.js";
import bcrypt from "bcrypt";
import express from "express";
import User from "../models/User.js";
const router = express.Router();
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//CREATE
export const createSalary = async (req, res, next) => {
    const userId = req.params.userid; 
    const newSalary = new Salary(req.body);
  
    try {
      const savedSalary  = await newSalary.save();
      try {
        await User.findByIdAndUpdate(userId, {
          $push: { 
            totalSalary: savedSalary._id},
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedSalary);
    } catch (err) {
      next(err);
    }
  };
//UPDATE
export const updateSalary = async (req,res,next)=>{
  try {
    const updatedSalary = await Salary.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSalary);
  } catch (err) {
    next(err);
  }
}

//DELETE
export const deleteSalary = async (req,res,next)=>{
 
  try {
    await Salary.findByIdAndDelete(req.params.id);
    try {
      const user = await User.findOne({totalSalary: req.params.id})
      if(user != null)
        await User.findByIdAndUpdate(user.id, {
          $pull: { totalSalary: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Salary has been deleted.");
  } catch (err) {
    next(err);
  }
}

// GET Salary limit 5  
export const getSalaryLimit = async (req,res,next)=>{
  try {
    const Salarylimit = await Salary.find();
    Salarylimit.length = 3 ;
    res.status(200).json(Salarylimit);
  } catch (err) {
    next(err);
  }
}
// GET ONE 
export const getSalary = async (req,res,next)=>{
  try {
    const salary = await Salary.findById(req.params.id);
    res.status(200).json(salary);
  } catch (err) {
    next(err);
  }
}

export const CountSalary = async (req,res,next)=>{
  try {
    const salary = await Salary.find(req.params.id).count();
    res.status(200).json(salary);
  } catch (err) {
    next(err);
  }
}
 

// GET ALL 
export const getSalarys = async (req,res,next)=>{
  try {
    const Salarys = await Salary.find();
    res.status(200).json(Salarys);
  } catch (err) {
    next(err);
  }
}