const passport = require("passport")
const LocalStratery =  require("passport-local").Strategy;
const JWTStratery = require("passport-jwt").Strategy;  
const User = require("../models/Users.model"); 

// authentication with email, password
passport.use(
    new LocalStratery((email, password, done)=>{ 
        User.findOne((email),(err,user) =>{ 
            if(err) return done(err); 
            if(!user) return done(null,false);
            user.comparePassword(passport,done); 
        })
    })
)

const cookiesExtractor = (req) => { 
    let token = null
    if(req && req.cookies){ 
        token = req.cookies["access_token"];
    }
    return token; 
}

passport.use(
    new JWTStratery({ 
        jwtFromRequest: cookiesExtractor, 
        secretOrKey: User.email, 
        }, 
        (payload,done) => { 
            User.findById({_id:payload.sub},(err,user) =>{
                if(err) return done(err, false);
                if(user) return done(null, user); 
                else return done(null, false) 
            } )
        })
)