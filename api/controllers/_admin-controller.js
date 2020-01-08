import admin from "../models/admin";
import busAgency from "../models/addAgency";
import busList from "../models/busList";
import Response from "../utils/response";
import JWT from "jsonwebtoken";
import { All } from "../../config/secretKey";

const jwttokenGenration = username => {
  return JWT.sign({ username: username }, All.secrets.accessToken, All.token);
};

export const adminlist = async (req, res) => {

  try {
    const data = await admin.find({});
    return Response(res, 200, "OK", {
      adminList: data
    });
  } catch (error) {
    console.log(error);
    return Response(res, 500, "Server Error", {
      error: "error"
    });
  }
};

export const create = async (req, res) => {
  
  try {
    const createAdmin = await admin.create(req.body);
    return Response(res, 200, "OK", {
      NewAdmin: createAdmin
    });
  } catch (error) {
    log.error("error", error);
    return Response(res, 500, "Server Error", {
      error: error
    });
  }
};

// TO Create Agency list
export const createAgency = async (req, res) => {
  try {
    let queryObj = Object.assign({}, req["body"]);
    let NewAgency = await busAgency.create(queryObj);
    return Response(res, 200, "OK", {
      NewAgency: NewAgency
    });
  } catch (error) {
    log.error("error", error);
    return Response(res, 500, "Server Error", {
      error: error
    });
  }
};

// TO View Agency list
export const viewAgency = async (req, res) => {
  try {
    let data = await busAgency.find({});
    return Response(res, 200, "OK", {
      AgencyList: data
    });
  } catch (error) {
    log.error("error", error);
    return Response(res, 500, "Server Error", {
      error: error
    });
  }
};

// To Create buses list
export const createBuses = async (req, res) => {
  try {
    let queryObj = Object.assign({}, req["body"]);
    let buslist = await busList.create(queryObj);
    return Response(res, 200, "OK", {
      NewBus: buslist
    });
  } catch (error) {
    log.error("error", error);
    return Response(res, 500, "Server Error", {
      error: error
    });
  }
};

// To View Bus list
export const viewBuses = async (req, res) => {
  try {
    let viewBuses = await busList.find({});
    return Response(res, 200, "OK", {
      BusList: viewBuses
    });
  } catch (error) {
    log.error("error", error);
    return Response(res, 500, "Server Error", {
      error: error
    });
  }
};

// TO Login
export const login = async (req, res) => {
  console.log(req);
  try {
    await admin.findOne({ email: req.body["email"] }, async (err, user) => {
      let pass = user.encryptPassword(req.body["password"]);
      let token = [{ refreshToken: jwttokenGenration(user.username) }];
      if (user.hashed_password === pass) {
        admin.update(
          { _id: user.id },
          { $set: { tokens: token } },
          (err, resu) => {
            console.log("res", resu);
          }
        );
        return Response(res, 200, "OK", {
          tokens: user.tokens,
          username: user.username
        });
      }
    });
  } catch (error) {
    log.error("error", error);
    return Response(res, 500, "Server Error", {
      error: error
    });
  }
};
