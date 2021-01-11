const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require('../models');

const opts = {
    jwtFromRequest: ExtractJwt.fromBodyField('token'),
    //jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
    secretOrKey: process.env.JWT_SECRET,
    //jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
    //passReqToCallback: true
};


module.exports = function(passport) {
    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {

        const user = await User.findByPk(jwt_payload.id);

        if(user){
            return done(null, user);
        } else {
            return done(null, false);
        }

        //return done(err, false);
    }));
};