// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// import routers
import apiRouter from './router';

// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable json message body for posting data to API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Setup
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/cp-api';
mongoose.connect(mongoURI);
// set mongoose promises to es6 default
mongoose.Promise = global.Promise;

// default index route
app.get('/', (req, res) => {
  res.send('hi');
});

// all of the "real" routes will be prefixed with /api
app.use('/api', apiRouter);

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);
