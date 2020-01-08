
import JWT from "jsonwebtoken";
import admin from "../models/admin";
import { All } from "../../config/secretKey";
import Response from "../utils/response";

// const jwttokenGenration = email => {
//   JWT.sign({ email: email }, All.secrets, All.token);
// };

export const isAuthenticated =request => {

   try {
   
    let result= admin.find({email: "super-admin@ourbus.com"});
    console.log(result)
    return result
    
     } catch (error) {
      return Response(res, 500, "Server error");
    }
  }

