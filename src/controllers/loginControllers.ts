import { Request, Response } from "express";
import { UserModel } from "../models/User";

const {v4: uuidv4} = require("uuid");
const encryptPassword = require("./../utilities/encryptPassword");
const checkPassword = require("./../utilities/checkPassword");

const loginPage = async (req: Request, res: Response) => {
    res.status(200).render('loginPage', {})
}

const login = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.query().findOne({
        email: email,
    })

    if(!user){
        res.status(404).json({
            message: "Email not found"
        });
        return;
    }

    const isPasswordCorrect = await checkPassword(
        user.password,
        password
    );

    if(!isPasswordCorrect){
        res.status(401).json({
            message: "Uncorrect password"
        });
        return;
    }

    // res.status(201).json({
    //     id: user.id,
    //     email: userController.email,
    //     token: "thisIsToken",
    //     createdAt: user.created_at,
    //     updatedAt: user.updated_at,
    // });
}

module.exports = {
    loginPage,
    login,
}