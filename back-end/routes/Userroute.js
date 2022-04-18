const router = require('express').Router(); 
let Users = require('../models/Users.model'); 



router.route('/').get((req , res) =>{
    Users.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err)); 
}   
);

router.route('/add').post((req,res) => { 
    const email = req.body.email;
    const password = req.body.password;
    const name     = req.body.name;
    const address = req.body.address;
    const telephone = Number(req.body.telephone); 
    const salary = Number(req.body.salary);
    const position = req.body.position;
    const numbership = req.body.numbership;

    const newUsers = new Users({ 
        email, 
        password, 
        name, 
        address, 
        telephone,
        salary, 
        position,
        numbership,
    }); 

    newUsers.save()
    .then(()=>res.json('User is added!!!'))
    .catch(err=> res.status(400).json('Error: ' + err)); 
}); 
router.route('/:id').get((req,res) => { 
    Users.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err=> res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req,res) => { 
    Users.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err=> res.status(400).json('Error: ' + err));
})

router.route('/:id/update').post((req,res) => { 
    Users.findOne({id : req.params.id})
    .then(users => { 
        users.email = req.body.email; 
        users.name = req.body.name; 
        users.address = req.body.address; 
        users.telephone = Number(req.body.telephone); 
        users.salary = Number(req.body.salary); 
        users.position = req.body.position; 
        users.numbership = req.body.numbership; 

        users.save()
        .then(() => res.json('User updated.'))
        .catch(err=> res.status(400).json('Error: ' + err));
    })
    .catch(err=> res.status(400).json('Error: ' + err));
})




module.exports = router ; 