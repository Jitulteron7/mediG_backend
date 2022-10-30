const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const helmet = require('helmet');
const router = require('./routes');
const logger = require('../config/logger');
const app = express();
const NAMESPACE = 'SERVER';
const axios = require('axios');
//middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
    cors({
      origin: `http://localhost:3000`,
      credentials: true,
    })
  );
app.use(helmet());
app.use(morgan('dev'));

//  api call log
app.use((req, res, next) => {
    /// Log the req
    logger.info('NAMESPACE', `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    // Log the res on finish
    res.on('finish', () => {
        logger.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});
// api creator
//f7igOHlXSmr1nktp
//mongodb+srv://Jitul:<password>@cluster0.s5um7ix.mongodb.net/?retryWrites=true&w=majority
//routes
app.get("/python", async (req, res, next) => {
    try {
        const data = await axios.get("http://127.0.0.1:5000/nodecall")
        console.log(data, "Data");
        res.json(data.data)

    } catch (error) {
        console.log(error, "Error");
    }
})


app.post("/python", async (req, res, next) => {
    try {
        const data = await axios.post("http://127.0.0.1:5000/nodepost",{
            message:"node python post",
            status : 200
        })

        console.log(data, "Data");
        res.json(data.data)

    } catch (error) {
        console.log(error, "Error");
    }
})

app.use('/', router);

//error handler
app.use((error, req, res, next) => {
    console.error(chalk.red(error));
    res.status(error.statusCode || 500).json({
        error: error,
        message: error.message || 'An Error Occured',
        route: req.url,
        name: error.name || 'InteralServerError'
    });
});

module.exports = app;
