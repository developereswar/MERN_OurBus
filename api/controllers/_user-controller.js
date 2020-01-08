import { userAuth } from '../models/user'

import Response from "../utils/response";


export const FbAuth = async (req, res) => {
    try {
        let result = req.body;
        let data = await userAuth.create(req.body);
        return Response(req.body, 200, "OK", {
            users: data
        });
    } catch (error) {
        return Response(res, 500, "Server Error", {
            error: error
        });
    }
}

export const AddPassword = async (req, res) => {
    try {
        let result = await userAuth.update(req.body['username'], req.body['password'], {
            new: true
        })
        Response(res, 200, "OK", {
            userDetail: result
        });
    } catch (error) {
        return Response(res, 500, "Server Error", {
            error: error
        });
    }
}