import Trip from "../models/Trip.js";
import Ship from "../models/Ship.js";
import { createError } from "../utils/error.js";
import request from "express"


// sum revenue all ship 
export const getSumRevenue = async(req,res, next)=> { 
  Trip.aggregate([{
    $group: {
     _id: '',
     "revenue": {$sum: '$revenue' }
    }
    },
  {   $project : { 
      _id: 0, 
      "revenue" : '$revenue'
    }
    }]
)
.then(Trip => res.json(Trip[0].revenue))
.catch(err=> res.status(400).json('Error: ' + err));
}


// lấy tổng tiền của doanh thu theo từng tàu
export const getRevenue = async(req,res, next)=> { 
  Trip.aggregate([
    {
        $group: { 
            _id: 
                '$numbership'
        ,revenue: {$sum: "$revenue" }
        }
    }
])
.then(Trip => res.json(Trip))
.catch(err=> res.status(400).json('Error: ' + err));
}

// count trip
export const CountTrip = async (req,res,next)=>{
  try {
    const trip = await Trip.count();
    res.status(200).json(trip);
  } catch (err) {
    next(err);
  }
}



export const createTrip = async (req, res, next) => {
  const shipId = req.params.shipid; 
  const newTrip = new Trip(req.body);

  try {
    const savedTrip = await newTrip.save();
    try {
      await Ship.findByIdAndUpdate(shipId, {
        $push: { trips: savedTrip._id},
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedTrip);
  } catch (err) {
    next(err);
  }
};

export const updateTrip = async (req, res, next) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTrip);
  } catch (err) {
    next(err);
  }
};
// export const updateTripAvailability = async (req, res, next) => {
//   try {
//     await Trip.updateOne(
//       { "TripNumbers._id": req.params.id },
//       {
//         $push: {
//           "TripNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Trip status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };
export const deleteTrip = async (req, res, next) => {
  
  try {
    await Trip.findByIdAndDelete(req.params.id);
    try {
      const ship = await Ship.findOne({trips: req.params.id})
      if(ship != null)
      await Ship.findByIdAndUpdate(ship.id, {
        $pull: { trips: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Trip has been deleted.");
  } catch (err) {
    next(err);
  }
};

// get one ship
export const getTrip = async (req, res, next) => {
  try {
    const trip = await Trip.findById(req.params.id);
    res.status(200).json(trip);
  } catch (err) {
    next(err);
  }
};

export const groupTrip = async(req, res,next) => { 
  let condition ; 
    if(req.query.number){ 
        condition = { 
            numbership: req.query.number
        }
    }
    Trip.find(condition)
        .then(trips=> res.json(trips))
        .catch(err => res.status(400).json('Error: ' + err)); 

}


//get trips in ship 

// export const getTripWithOneShip = async(req, res ,next) => { 
//   try {
//    const Trips =  await Trip.find();
//     try {
//       const ship = await Ship.findOne({trips: req.params.id })
//       if(ship != null)
//       await Ship.findById(ship.id, {
//         $get: { trips: req.params.id},
//       });
//     } catch (err) {
//       next(err);
//     }
//     res.status(200).json(Trips);
//   } catch (err) {
//     next(err);
//   }
// }


export const getTrips = async (req, res, next) => {
  try {
    const Trips = await Trip.find();
    res.status(200).json(Trips);
  } catch (err) {
    next(err);
  }
};