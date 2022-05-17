import Ship from "../models/Ship.js";
import express from "express";
import User from "../models/User.js";

// create 
export const createShip = async (req, res, next) => {
    const  newShip = new Ship(req.body)
    try{ 
    const saveShip = await newShip.save(); 
    res.status(200).json(saveShip)
    } 
    catch(err){ 
        next(err)
    }  
  };
//update 
  export const updateShip = async (req, res, next) => {
    try {
      const updatedShip = await Ship.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedShip);
    } catch (err) {
      next(err);
    }
  };
//delete
  export const deleteShip = async (req, res, next) => {
    try {
      await Ship.findByIdAndDelete(req.params.id);
      res.status(200).json("Ship has been deleted.");
    } catch (err) {
      next(err);
    }
  };
// get a ship by number
  export const getShipbyNumber = async (req, res, next) => {
    try {  
      const oneship = await Ship.findOne({'number' :req.params.number});
      res.status(200).json(oneship);
    } catch (err) {
      next(err);
    }
  };

//get oneship 
  export const getShip = async (req, res, next) => {
    try {
      const ship = await Ship.findById(req.params.id);
      res.status(200).json(ship);
    } catch (err) {
      next(err);
    }
  };
//get all ship
export const getShips = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const Ships = await Ship.find({
        ...others,
      }).limit(req.query.limit);
      res.status(200).json(Ships);
    } catch (err) {
      next(err);
    }
  };