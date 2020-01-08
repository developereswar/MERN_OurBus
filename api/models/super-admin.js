"use strict";

import mongoose from "mongoose";
import crypto from 'crypto';
const Schema = mongoose.Schema;

const superAdminSchema = new Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    hashed_password: String,
    mobile: Number,
    role:String,
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    },
    salt:String,
    tokens:[{
        clientId: Number,
        refreshToken: String
    }]
}, { timestamps: true });


superAdminSchema
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

superAdminSchema.path("hashed_password").validate(hashedPassword => {
	return hashedPassword.length;
}, "Password cannot be blank");

superAdminSchema.methods = {
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

var admin = mongoose.model("admin", superAdminSchema);
export default admin;