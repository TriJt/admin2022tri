
const router = require('express').Router(); 
let Ships = require ('../models/Ships.model'); 


router.route('/').get((req , res) =>{
    Ships.find()
        .then(ships => res.json(ships))
        .catch(err => res.status(400).json('Error: ' + err)); 
}
    
); 


router.route('/:id').get((req,res) => { 
    Ships.findById(req.params.id)
    .then(ships => res.json(ships))
    .catch(err=> res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => { 
    const numberShip = req.body.numberShip;
    const nameofShip = req.body.nameofShip;
    const numberofmember = Number(req.body.numberofmember);
    const Status = req.body.Status;
    // const Dayout = Date.parse(req.body.Dayout);
    // const Dayin = Date.parse(req.body.Dayin);
    // const Fuel = Number(req.body.Fuel);
    // const note = req.body.note;

    const newShips = new Ships({ 
        numberShip, 
        nameofShip, 
        numberofmember, 
        Status 
        // Dayout, 
        // Dayin, 
        // Fuel,
        // note,
    }); 

    newShips.save()
    .then(()=>res.json('SHIP WAS ADDED!!!'))
    .catch(err=> res.status(400).json('Error: ' + err)); 
}); 



router.route('/:id').delete((req,res) => { 
    Ships.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ship deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
})

router.route('/:id/update').post((req,res) => { 
    Ships.findById(req.params.id)
    .then(ships => { 
        ships.numberofShip = req.body.numberofShip; 
        ships.nameofShip = req.body.nameofShip; 
        ships.numberofmember = Number(req.body.numberofmember); 
        ships.Status =  req.body.Status;
        // ships.Dayout = Date.parse(req.body.Dayout);
        // ships.Dayin = Date.parse(req.body.Dayin);
        // ships.Fuel = Number(req.body.Fuel);
        // ships.note = req.body.note; 

        ships.save()
        .then(() => res.json('Ship updated.'))
        .catch(err=> res.status(400).json('Error: ' + err));
    })
    .catch(err=> res.status(400).json('Error: ' + err));
})


module.exports = router ; 