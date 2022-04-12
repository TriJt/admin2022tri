const router = require('express').Router(); 
let Trips = require ('../models/Trip.model');

router.route('/').get((req , res) =>{
    Trips.find()
        .then(trips=> res.json(trips))
        .catch(err => res.status(400).json('Error: ' + err)); 
}
    
); 

router.route('/:id').get((req,res) => { 
    Trips.findById(req.params.id)
    .then(trips => res.json(trips))
    .catch(err=> res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => { 
    const numberShip = req.body.numberShip;
    const revenue   = Number(req.body.revenue);
    const dayout = Date.parse(req.body.dayout);
    const dayin = Date.parse(req.body.dayin);
    const fuel = Number(req.body.fuel);
   

    const newtrips = new Trips({ 
        numberShip, 
        revenue, 
        dayout, 
        dayin, 
        fuel,
        
    }); 

    newtrips.save()
    .then(()=>res.json('New Trip!!!'))
    .catch(err=> res.status(400).json('Error: ' + err)); 
});

router.route('/update/:id').post((req,res) => { 
    Trips.findById(req.params.id)
    .then(trips => { 
        trips.numberofShip = req.body.numberofShip; 
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

