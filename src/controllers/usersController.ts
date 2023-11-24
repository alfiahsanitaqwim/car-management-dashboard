import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserService from "../services/users";
import { NextApiHandler } from "next";

const {v4: uuidv4} = require("uuid");
const  encryptPassword = require("./../utilities/encryptPassword")
const  checkPassword = require("./../utilities/checkPassword")

interface UserPayload {
    email: string
    password?: string
}

const createToken = (payload: UserPayload) => {
    return jwt.sign(payload, process.env.SIGNATURE_KEY || "Rahasia")
} 

// add new user to user table database;
const register = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password || "";

    try {
        const encryptedPassword = await encryptPassword(password);

        // Create a new row in the "users" table
        await new UserService().post({ email, password: encryptedPassword });

        return res.json({
            message: "Success"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Registration failed"
        });
    }
};


// do some checkings based on email and password encrypted compared to pass unencrypted;
const login  =  async (req:Request, res: Response) => {
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password || "";

    // to check whether user email exists in db or not;
    const user = await new UserService().get({email});

    if(!user){
        return res.status(404).json({
            message: "Email is not exist, try another one!"
        })
    }

    const passwordChecked = await checkPassword(user.password, password)

    if(!passwordChecked){
        return res.status(401).json({
            message: "Password is wrong, try again!"
        })
    }

    const token = createToken({
        // @ts-ignore
        user_id: user.user_id,
        email: user.email,
        role: user.id_role,
    })

    return res.status(200).json({
        token,
        status: 200,
        message: "Successfully Logged In",

    })
}


// get user currently logged In, monggo bikin sendiri;
const getCurrentUser = (req:Request, res:Response) => {

}
 // @ts-ignore
const getUserProfile =  (req:Request, res:Response) => {
     // @ts-ignore
    res.status(200).json(req.user)
}

//
const authorize = async (req:Request, res:Response, next: unknown) => {
    try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken?.split("Bearer ")?.[1] || "";
    const tokenPayload = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia");
    console.log({bearerToken, token, tokenPayload})

    // @ts-ignore
    req.user = await new UserService().getById(tokenPayload.user_id);
     // @ts-ignore
    next()
    } catch (error) {
           res.status(401).json({
            message: "Unauthorized"
           }) 
    }``
}

const isSuperAdmin = async (req:Request, res:Response) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken?.split("Bearer ")?.[1] || "";
        const tokenPayload:any = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia");
        console.log("disini");
        console.log({bearerToken, token, tokenPayload})
    
        if(tokenPayload?.role === 1){
            // asdasdasdasdas
            return true
        }
        return false
    }catch{}
}

const editRoleToAdmin = async (req:Request, res:Response) => {
    
    console.log("disini ok");
    res.status(200).json("sd")
}

module.exports = {
    register, 
    login,
    getUserProfile, 
    authorize,
    isSuperAdmin,
    editRoleToAdmin
}