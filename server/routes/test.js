const express = require('express');
const router = express.Router();
const transporter = require('../libs/transporter');
const {User, Location} = require('../models');

router.get('/', async (req, res) => {

    // SELECT USER AND HIS LOCATION

    const {user_id} = req.body;

    const user = await User.findOne({
        where: {
            public_id: user_id
        }
    });


    return res.json({user});

    if(!user){

    }

    const mailOpt = {
        from: process.env.GMAIL_EMAIL,
        to: savedUser.email,
        subject: 'Please, validate your email',
        html: `<a href="${process.env.DOMAIN}/users/verify/${token}">${process.env.DOMAIN}/verify/${token}</a>`
    };

    const send = await transporter.sendMail(mailOpt);


   return res.json({ok: 'ok'});
});

module.exports = router;
