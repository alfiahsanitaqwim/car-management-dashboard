import { Request, Response } from "express";
import UserService from "../services/users";
import jwt from "jsonwebtoken";

const checkPassword = require("../utilities/checkPassword");
const  encryptPassword = require("../utilities/encryptPassword")

interface UserPayload {
    email: string
    password?: string
}

export const createToken = (payload: UserPayload) => {
    return jwt.sign(payload, process.env.SIGNATURE_KEY || "Rahasia")
} 

// export const loginPage = async (req: Request, res: Response) => {
//     res.status(200).render('loginPage', {})
// }

export const login  =  async (req:Request, res: Response) => {
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password || "";
    const user = await new UserService().get({email});

    if(!user){
        return res.status(404).json({
            message: "Email doesn't not exist, try another one!"
        })
    }

    const passwordChecked = await checkPassword(user.password, password)

    if(!passwordChecked){
        return res.status(401).json({
            message: "Uncorrect password, try again!"
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