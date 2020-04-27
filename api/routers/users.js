"use strict";
import Express from "express";
import { FbAuth, AddPassword } from "../controllers/_user-controller";
import {GoogleApis} from 'googleapis';

var user = Express.Router()

const checker = () => {
  
    // GoogleApis.load('auth2', function() {
    //   const auth2 = GoogleApis.auth2.init({
    //     client_id: '594202953383-8ebq99ne1ujnamshi7pqk4q0teabh885.apps.googleusercontent.com',
    //     // Scopes to request in addition to 'profile' and 'email'
    //     //scope: 'additional_scope'
    //   });
    //   auth2.grantOfflineAccess().then(e =>{
    //     console.log(e)
    //   })
    // });


    const oAuth2Client = new GoogleApis.auth.OAuth2(
      "2e2noi122ioo", "jbniu12ui2uijkbuib", "http://www.fb.com");
      console.log("oAuth2Client")

} 



user.post("/add/fbuser", FbAuth, );
user.post("/add/credential", AddPassword)
user.get('/add/check', (req,res)=>{
        console.log(req)
        GoogleApis.load('auth2', function() {
      const auth2 = GoogleApis.auth2.init({
        client_id: '594202953383-8ebq99ne1ujnamshi7pqk4q0teabh885.apps.googleusercontent.com',
        // Scopes to request in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      auth2.grantOfflineAccess().then(e =>{
        console.log(e)
      })
    });
    res.send("jiji")
})
export default user;