import express from 'express';
import { createAgency, adminlist, createBuses, viewBuses, viewAgency, create, login } from "../controllers/_admin-controller";
const admin = express.Router();

/* for admin page */
admin.get('/admin', adminlist);
// For login 
admin.post('/adminlogin', login)
// add admin Credits
admin.post('/addadmin', create)
// add agency
admin.post("/addagency", createAgency);
// get agency list
admin.get("/agencylist", viewAgency);
// create buses list
admin.post("/addbuses", createBuses);
// view bus list
admin.get("/viewbuses", viewBuses)

export default admin;

