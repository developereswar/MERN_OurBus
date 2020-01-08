"use strict";

import mongoose from "mongoose";
import crypto from 'crypto';
const Schema = mongoose.Schema;

// user register and login schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    },
    hashed_password:String,
    salt:String,
    tokens:[{
        accessToken: String,
        userID: String
    }]
}, { timestamps: true });


// User Deatils Schema
const userDetailSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: Number,
        unique: true
    },
    companyName:{
        type: String
    },
    companyID:{
        type: String,
        unique: true
    },
}, { timestamps: true });


userSchema
    .virtual("password")
    .set(function(password){
        if(password){
            this._password = password;
            this.salt = this.makeSalt();
            this.hashed_password = this.encryptPassword(password)
        }
    })
    .get(function(){
        return this.password
    })

userSchema.path("hashed_password").validate(hashedPassword => {
	return hashedPassword.length;
}, "Password cannot be blank");

userSchema.methods = {
        authenticate: function(plainText) {
            return this.encryptPassword(plainText) === this.hashed_password;
        },
        makeSalt: () => {
            return crypto.randomBytes(16).toString("base64");
        },
        encryptPassword: function (password) {
            if (!password || !this.salt) return "";
            const saltWithEmail = new Buffer.from(
                this.salt + this.email.toString("base64"),
                "base64"
            );
            return crypto
                .pbkdf2Sync(password, saltWithEmail, 10000, 64, "sha1")
                .toString("base64");
        }
};

export const userAuth= mongoose.model("user", userSchema);
export const userDetails= mongoose.model("userDetail", userDetailSchema);
