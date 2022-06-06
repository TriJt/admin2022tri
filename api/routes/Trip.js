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
    CountTrip,
    getSumRevenue,
    groupTrip

  } from "../controllers/trip.js";
import {verifyAdmin} from "../utils/verifyToken.js"

//get sum revenue
router.get("/sum",getSumRevenue)

//count trip 
router.get("/count",CountTrip)

// Creat new Trip with api
router.post("/:shipid",  createTrip);  

//UPDATE
router.put("/:id",  updateTrip);

//DELETE
router.delete("/:id",  deleteTrip);

//group by numbership
router.get("/grouptrip/:shipid",groupTrip)

//GET
router.get("/find/:id",  getTrip);


//GET revenue
router.get("/revenue", getRevenue); 
//GET ALL
router.get("/",  getTrips);

export default  router ; 




