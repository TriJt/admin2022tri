
const router = require('express').Router(); 
const { default: mongoose } = require('mongoose');
let Ships = require ('../models/Ships.model'); 


router.route('/').get((req , res) =>{
    Ships.find()
        .then(ships => res.json(ships))
        .catch(err => res.status(400).json('Error: ' + err)); 
}
    
); 


router.route('/:numberShip').get((req,res) => { 
    Ships.findOne({numberShip: req.params.numberShip})
    .then(ships => res.json(ships))
    .catch(err=> res.status(400).json('Error: ' + err));
})


router.route('/add').post((req,res) => { 
    const numberShip = req.body.numberShip;
    const image = req.body.image; 
    const nameofShip = req.body.nameofShip;
    const numberofmember = Number(req.body.numberofmember);
    const Status = req.body.Status;
    const newShips = new Ships({ 
        numberShip, 
        nameofShip, 
        image,
        numberofmember, 
        Status 
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
    Ships.findOne({numbership: req.params.numberShip})
    .then(ships => { 
        ships.numberShip = req.body.numberShip; 
        ships.nameofShip = req.body.nameofShip; 
        ships.numberofmember = Number(req.body.numberofmember); 
        ships.Status =  req.body.Status;
        ships.save()
        .then(() => res.json('Ship updated.'))
        .catch(err=> res.status(400).json('Error: ' + err));
    })
    .catch(err=> res.status(400).json('Error: ' + err));
})


module.exports = router ; 