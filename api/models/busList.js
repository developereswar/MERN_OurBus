"use strict"

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// const Obj_ID = mongoose.Types.ObjectId;

const busList = new Schema({
    busName: String,
    agencyName: String,
    status: [{
        StationName: String,
        StationAddress: String
    }]
})


mongoose.model("buslists", busList)
var bus = mongoose.model("buslists");



export default bus;