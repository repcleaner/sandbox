const {User, VerifyToken} = require('../models');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginValidator = require('../validators/receive');

const transporter = require('../libs/transporter');
const passport = require('passport');

const crypto = require('crypto');

const Op = require('sequelize').Op;

require('../config/jwt')(passport);

const moment = require('moment');




const generateToken = function(payload) {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
    });
};

router.post('/authenticate', async (req, res) => {

    // DELETE ALL EXPIRED TOKENS MORE THAN 24 HOURS
    //@TODO: delete user and token with one query

    const expiredVerifyTokens = await VerifyToken.findAll({
        attributes: [
            'id', 'user_id'
        ],
        where: {
            created_at: {
                [Op.lte]: moment().add(-24, 'hours').format("YYYY-MM-DD HH:mm:ss").toString()
            }
        }
    });

   // console.log(new Date(Date.now() - (60 * 60 * 24 )));
   // console.log(moment().add(-24, 'hours').format("YYYY-MM-DD HH:mm:ss").toString());

    if(expiredVerifyTokens.length){

        const unverifiedUserIds = expiredVerifyTokens.map(token => token.user_id);
        const unverifiedTokenIds = expiredVerifyTokens.map(token => token.id);


        console.log(unverifiedTokenIds);
        await User.destroy({
           where:{
               id:{
                   [Op.in]: unverifiedUserIds
               }
           }
        });

        await VerifyToken.destroy({
            where:{
                id:{
                    [Op.in]: unverifiedTokenIds
                }
            }
        });
    }

    if(!loginValidator(req.body)){
        return res.json({success: false, message: 'Invalid data.'})
    }

    let {email, password} = req.body;
    const user = await User.findOne({
        attributes: [
            'id', 'email', 'password', 'email_validated'
        ],
        where: {
            email
        }
    });

    // IF USER AUTHENTICATE
    let auth = false;
    if(user){

        // REGISTERED BUT NOT MAIL VALIDATION
        if(!user.email_validated){
            return res.json({success: false, message: 'The email is not validated', user});
        }

        // USER EXISTS AND MAIL IS VALIDATED

        //@TODO: make integration for hashing passwords in old PHP app is another alghoritm
        auth = bcrypt.compare(password, user.password);
        if(auth){
            auth = await bcrypt.compare(password, user.password.replace(/^\$2y/, "$2a"))
        }

        if(auth){
            return res.json({success: true, type: 'login', token: generateToken({id: user.id}), message: 'Success authenticated'})
        }

        // PASSWORD IS INVALID AND USER IS VERIFIED
        return res.json({success: false, message: 'Invalid password', error_type: 'password'})

    } else { // REGISTER
        password = password.trim();

        if(password.length < 6) {
            return res.json({success: false, message: 'The password must be minimum 6 characters'});
        }

        const newUser = User.build({email, password: bcrypt.hashSync(password, 10), email_validated: 0, role: 1});

        const savedUser = await newUser.save();
        if(savedUser){
            const token = crypto.randomBytes(20).toString('hex');
            const newToken = VerifyToken.build({user_id: savedUser.id, token});
            const savedToken = await newToken.save();

            if(savedToken){
                return res.send({success: true, type: 'registration', message: 'Please, verify your email', token: generateToken({id: savedUser.id}), verify_token: savedToken.token});
            }
        }
    }

    return res.json({success: false, message: 'Something were wrong'});
});


router.post('/:token', async (req, res) => {
    const {token} = req.body;

    console.log(token);
    const verifyToken = await VerifyToken.findOne ({
        where: {
            token
        },
        attributes: [
            'token', 'user_id', 'created_at'
        ],
        include: {
            model: User,
            attributes: [
                'id', 'email'

            ]
        }
    });

   // return res.json({verifyToken})


    // SET ERROR IF TOKEN NOT FOUND
    if(!verifyToken){
        //return res.json({success: false, message: 'Token not found', token, verifyToken});
        return res.json({success: true, message: 'The email was vaidated'})
    }

    //return res.json({success: false, message: 'after found', verifyToken});

    // SET ERROR IF TOKEN EXPIRED
    if(verifyToken.is_expired){ // 24 hours in milliseconds
        //return res.json({success: false, message: 'Token expired'});
        return res.json({success: true, message: 'The email was vaidated'})
    }


    // TOKEN IS NOT EXPIRED VERIFY THE USER

    const {id, email} = verifyToken.User.dataValues;

    const deleteToken = await VerifyToken.destroy({
        where:{
            user_id: id
        }
    });

    // SET email_validated: true

    const userValidated = await User.update({
        email_validated: 1
    }, {
        where:{
            id
        }
    });

    if(userValidated){
        return res.json({success: true, message: 'The email was vaidated', email})
    }


   res.json({success: false, message: 'There is an error.'});
});

module.exports = router;

