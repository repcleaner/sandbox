require('dotenv').config();

const consola = require('consola');
const Joi = require('joi');

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

// include modules for express/mongodb server
const express = require('express');
const app = express();
const monk = require('monk');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const puppeteer = require('puppeteer');

const passport = require('passport');

const PORT = 5000;

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(passport.initialize());
require('./config/jwt')(passport);

//ROUTES
const locationRoutes = require('./routes/locations');
const userRoutes = require('./routes/users');
app.use('/api/locations', locationRoutes);

app.use('/api/users', userRoutes);

app.listen(PORT);

consola.ready({
    message: `API listening on http://localhost:${PORT}`,
    badge: true
});

app.post('/demo', (req, res) => {
    console.log('went to demo: ', req.body.name);
    async function run() {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: false
        });

        const search_url = `https://www.google.ca/search?q=what+a+bagel`;

        const page = await browser.newPage();

        await page.setViewport({
            width: 1440,
            height: 1200,
            deviceScaleFactor: 1,
        });

        await page.goto(search_url);

        const address = '.LrzXr';

        const location_address = await page.evaluate(() => document.getElementsByClassName('LrzXr')[0]);

        console.log('completed search: ', location_address)
        //await browser.close();
    }

    run();

    res.json({
        message: 'Behold The Demo!'
    });
});


const { Nuxt, Builder } = require('nuxt');

async function start () {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    let { host, port } = nuxt.options.server;

    //port = 5000;
    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port} | TIME: ${(new Date(Date.now() - (60 * 60 * 24)))}`,
        badge: true
    })
}
start();