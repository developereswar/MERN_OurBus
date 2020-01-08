"use strict";
import Express from "express";
import { FbAuth, AddPassword } from "../controllers/_user-controller";
var user = Express.Router()


user.post("/add/fbuser", FbAuth);
user.post("/add/credential", AddPassword)

export default user;