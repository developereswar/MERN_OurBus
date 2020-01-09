import express from "express";
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import {mongo} from './config/enviroment';
import routerConfig from "./routes";
var cors = require('cors');
var app = express();

// app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up a whitelist and check against it:

app.use(cors({origin:'*'}));

// default route home page
app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

routerConfig(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));             
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send('error ');
});

// mongoose.connect(mongo.uri, mongo.options);

// mongoose.connection.on('error', err => {
//     console.log(err);
//   });

module.exports = app;