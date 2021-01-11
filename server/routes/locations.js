const models = require('../models');
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const {User, Location, VerifyToken} = require('../models');
const bitly = require('bitly-node-api')(process.env.BITLY_ACCESS_TOKEN);
const ejs = require('ejs');
const fs = require('fs');
const authenticate = require('../middlewares/authenticate');
const appRootPath = require('app-root-path');
const {Op} = require('sequelize');



const transporter = require('../libs/transporter');

// Load the SDK for JavaScript
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-2',
    accessKeyId: "<Access Key Here>",
    secretAccessKey: "<Secret Access Key Here>"
});

router.get('/exists/:google_id', async (req, res) => {
    const {google_id} = req.params;
    const locations  = await models.Location.findAll({
        attributes: [
            'funnel_shorten_link'
        ],
        where: {
            google_id,
            request_for_funnel: true,
            //funnel_shorten_link: {[Op.not]: null}
        }
    });

    return res.json({locations})

});

router.post('/create'
    ,authenticate
    , async (req, res, next) => {

    // SELECT USER AND HIS LOCATION

    const {id, email, email_validated} = req.user;
    let {business_name, place_id, business_telephone, business_address, business_review_link} = req.body;

    business_name = business_name.trim();
    place_id = place_id.trim();

    if(!business_name.length || !place_id.length){
        return res.json({success: false, message: "Invalid data"});
    }

    if(await Location.isExists(place_id)){
        return res.json({success: false, message: 'A funnel with the same Google ID exists'});
    }

    let funnel_link = await Location.generateUniqueFunnelLink(business_name);


    const userData = await User.findOne({
        include: [
            {
                model: VerifyToken,
                attributes:['created_at', 'is_expired', 'token']
            },
            {
                model: Location
            }
        ],
        where: {
            id
        }
    });

    // IF NOT VERIFIED AND EMAIL VERIFICATION IS EXPIRED

    if(!email_validated && userData.VerifyToken.is_expired){
        return res.json({success: false, message: 'The email verification expired'});
    }

    // IF NOT VERIFIED AND EMAIL VERIFICATION IS NOT EXPIRED
    //if(!user.email_validated && !user.VerifyToken.is_expirerd){
    //    return res.json({success: false, message: 'PLEASE'});
    ///}

    // THE USER IS AUTHENTICATED AND LOCATION DATA EXISTS

    let bitlyResponse;
    const fullFunnelLink = 'https://' + funnel_link + '.happyfeed.io';
    try {
        bitlyResponse = await bitly.bitlinks.createBitlink({
            long_url: fullFunnelLink + '/welcome'
        });

    } catch (error) {
        console.log(error);
        console.log(fullFunnelLink);
        return res.json({success: false, message: 'There was a problem generating shorten URL.'})
    }

    const public_id = crypto.randomBytes(20).toString('hex');

    let location;

    const locationBuild = Location.build({
        user_id: id,
        name: business_name,
        address: business_address,
        google_id: place_id,
        funnel_link: fullFunnelLink,
        public_id,
        funnel_shorten_link: bitlyResponse.link,
        google_review_link: business_review_link
    });

    try{
        location = await locationBuild.save();
    }catch(errors){

        return res.json({success: false, errors})
    }


    fs.readFile(appRootPath + '/server/views/emails/welcome.ejs', 'utf-8', (err, data) => {
        const html = ejs.render(data, {
            funnel_url: bitlyResponse.link
        });

        const mailOpt = {
            from: process.env.GMAIL_EMAIL,
            to: email,
            subject: 'Welcome',
            html
        };

        transporter.sendMail(mailOpt);
    });

    const with_verify = !!userData.VerifyToken;

    // SEND AND EMAIL VERIFICATION EMAIL
    if(with_verify){
        const file = fs.readFileSync(appRootPath + '/server/views/emails/verify.ejs', 'utf-8');
        const verify_url = `${process.env.DOMAIN}/users/verify/${userData.VerifyToken.token}`;
        const html = ejs.render(file, {
            verify_url
        });

        const mailOpt = {
            from: process.env.GMAIL_EMAIL,
            to: email,
            subject: 'Please, validate your email',
            html
        };

        const send = await transporter.sendMail(mailOpt);
        return res.json({funnel_link: bitlyResponse.link, success: true, with_verify, email, send: !!send });
    }

    return res.json({funnel_link: bitlyResponse.link, success: true, with_verify, email });

});

router.post('/get', async (req, res) => {
    const {subdomain} = req.body;
    //subdomain = 'ghfg';

    if(subdomain) {
        const location = await Location.findOne({
            attributes: ['public_id', 'google_review_link'],
            where:{
                funnel_link: {
                    [Op.like]: 'https://' + subdomain + '.%'
                }
            }
        });
        if(location){
            return res.json({success: true, id: location.public_id, google_review_link: location.google_review_link});
        } else {
            return res.json({success: false, message: 'Location not found'})
        }
    }

    return res.json({success: false, message: 'Invalid data'});

});

module.exports = router;