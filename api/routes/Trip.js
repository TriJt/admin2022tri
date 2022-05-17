import express from "express";
const router = express.Router(); 
import Trips from '../models/Trip.js';
import {
    createTrip,
    deleteTrip,
    getTrip,
    getTrips,
    updateTrip,
    getRevenue,
    getTripWithOneShip
  } from "../controllers/trip.js";
import {verifyAdmin} from "../utils/verifyToken.js"

// Creat new Trip with api
router.post("/:tripid",  createTrip);  

//UPDATE
router.put("/:id",  updateTrip);

//DELETE
router.delete("/:id",  deleteTrip);

//GET
router.get("/find/:id",  getTrip);

//get  trips of one ship
router.get("/findList",  getTripWithOneShip)

//GET revenue
router.get("/revenue", getRevenue); 
//GET ALL
router.get("/",  getTrips);

export default  router ; 




