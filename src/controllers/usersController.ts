import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User";
import { userRole } from "./userRolesController";


export const updateRole = async (req:Request, res:Response) => {    
    const isSuperAdmin = await userRole({
        req,
        access: "superadmin"
    });
    const {id, to_role} = req.body;
    if(isSuperAdmin){
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