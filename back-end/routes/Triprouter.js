const router = require('express').Router(); 
const { request } = require('express');
let Trips = require ('../models/Trip.model');

router.route('/').get((req , res) =>{
    let condition ; 
    if(req.query.numberShip){ 
        condition = { 
            numbership: req.query.numberShip
        }
    }
    Trips.find(condition)
        .then(trips=> res.json(trips))
        .catch(err => res.status(400).json('Error: ' + err)); 
}
); 



router.route('/revenue').get((req,res) => { 
    Trips.aggregate([
        {
            $group: { 
                _id: 
                    '$numbership'
            ,revenue: {$sum: "$revenue" }
            }
        }
    ])
    .then(trips => res.json(trips))
    .catch(err=> res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req,res) => { 
    Trips.findById(req.params.id)
    .then(trips => res.json(trips))
    .catch(err=> res.status(400).json('Error: ' + err));
})




router.route('/add').post((req,res) => { 
    const numbership = req.body.numbership;
    const revenue   = Number(req.body.revenue);
    const dayout = Date.parse(req.body.dayout);
    const dayin = Date.parse(req.body.dayin);
    const fuel = Number(req.body.fuel);
   

    const newtrips = new Trips({ 
        numbership, 
        revenue, 
        dayout, 
        dayin, 
        fuel,
        
    }); 

    newtrips.save()
    .then(()=>res.json('New Trip!!!'))
    .catch(err=> res.status(400).json('Error: ' + err)); 
});

router.route('/:id/update').post((req,res) => { 
    Trips.findById(mongoose.Types.ObjectId(req.params.id))
    .then(trips => { 
        trips.numbership = req.body.numbership; 
        trips.dayout = Date.parse(req.body.dayout);
        trips.dayin = Date.parse(req.body.dayin);
        trips.fuel = Number(req.body.fuel); 

        trips.save()
        .then(() => res.json('Ship updated.'))
        .catch(err=> res.status(400).json('Error: ' + err));
    })
    .catch(err=> res.status(400).json('Error: ' + err));
})


module.exports = router ;

