import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UserService from "../services/users";
import { UserModel } from "../models/User";
import { userRole } from "./userRolesController";

const  encryptPassword = require("./../utilities/encryptPassword")

export const register = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password || "";

    try {
        const encryptedPassword = await encryptPassword(password);

        await new UserService().post({ email, password: encryptedPassword });

        return res.json({
            message: "Success",
            data: []
        });
        
    } catch (error) {
        return res.status(500).json({
            message: "Registration failed"
        });
    }
};

export const updateRole = async (req:Request, res:Response) => {    
    const isSA = await userRole({
        req,
        access: "superadmin"
    });
    const {id, to_role} = req.body;
    if(isSA){
        await UserModel.query().where('id', '=', id).update({id_role: to_role})
        res.json({
                "status": "Success",
                "message": "Has been updated"
            }
        )
    }else{
        res.json({
            "status": "Unauthorized",
            "message": "Your are not superadmin"
        }
    )
    }
}


export const getCurrentUser = async (req: any, res: Response) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken?.split("Bearer ")?.[1] || "";
        const tokenPayload:any = await jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia"); 
        res.status(200).json({
            message: "Success",
            data: tokenPayload
        });
    }catch{
        res.status(500).json({
            message: "Error",
            data: null
        });
    } 
};

export const getEmail = (req:Request) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken?.split("Bearer ")?.[1] || "";
        const tokenPayload:any = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia"); 
        return tokenPayload?.email;
    }catch{
        return "";   
    }
}