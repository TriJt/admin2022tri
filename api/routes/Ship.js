import {
    createShip,
    deleteShip,
    getShip,
    getShips,
    updateShip,
    getShipbyNumber,
    CountShip,
    countByStatus,
  } from "../controllers/ship.js";
import {verifyAdmin} from "../utils/verifyToken.js"
import express from "express";
const router = express.Router(); 

router.get("/countByStatus", countByStatus);

//count ship 
router.get("/count",CountShip)

// Creat new ship with api
router.post("/", createShip); 

//UPDATE
router.put("/:id",updateShip);

//DELETE
router.delete("/:id", deleteShip);

//GET
router.get("/find/:id", getShip);
// het by number
router.get("/:number", getShipbyNumber);
//GET ALL
router.get("/",  getShips);


export default  router ; 