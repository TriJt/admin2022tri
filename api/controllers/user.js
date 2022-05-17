import User from "../models/User.js";
import bcrypt from "bcrypt";
import express from "express";
import Ship from "../models/Ship.js";
const router = express.Router();
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//CREATE
export const createUser = async (req, res, next) => {
  try {
    const shipId = req.params.shipid;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    try {
      const savedUser = await newUser.save();
      try {
        await Ship.findByIdAndUpdate(shipId, {
          $push: { members: savedUser._id  },
        });
      } catch (err) {
        next(err);
      } res.status(200).json(savedUser);
    } catch (err) {
      next(err);
    }
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

//DELETE
export const deleteUser = async (req,res,next)=>{
 const ShipId = req.params.Shipid;
  try {
    await User.findByIdAndDelete(req.params.id);
    try {
      const ship = await Ship.findOne({members: req.params.id})
      if(ship != null)
        await Ship.findByIdAndUpdate(ship.id, {
          $pull: { members: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}

// GET user limit 5  
export const getUserLimit = async (req,res,next)=>{
  try {
    const userlimit = await User.find();
    userlimit.length = 3 ;
    res.status(200).json(userlimit);
  } catch (err) {
    next(err);
  }
}
// GET ONE 
export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

// GET ALL 
export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}