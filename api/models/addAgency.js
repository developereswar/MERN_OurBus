"use strict";

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const busAgency = new Schema({
    agencyName:{
        type: String,
        required: true
    },
    agencyEmail:{
        type: String,
    },
    agencyMobile:{
        type: String,
    },
    agencyAddress:{
        type:String
    }
});

mongoose.model("agencys", busAgency)
var agency = mongoose.model("agencys");



export default agency;