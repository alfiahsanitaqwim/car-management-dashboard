import { Request, Response } from "express";
import UserService from "../services/users";
// import UserService from "../services/users"

const {v4: uuidv4} = require("uuid");
const encryptPassword = require("./../utilities/encryptPassword");
const checkPassword = require("./../utilities/checkPassword");

const register = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password || "";
    // sesuain figma

    const encryptedPassword = await encryptPassword(password);
    // const isPassCorrect = await checkPassword(encryptedPassword, password);
    console.log({encryptedPassword});

    const registeredUser = await new UserService().post({email, password: encryptedPassword})

    return res.json({
        message: "success",
        data: registeredUser
    })
}

const login = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password || "";

    // const encryptedPassword = await encryptPassword(password);
    // console.log({encryptedPassword});

    // const registeredUser = await new UserService().post({email, password: encryptedPassword})

    // return res.json({
    //     message: "success",
    //     data: registeredUser
    // })
}

module.exports = {
    register,
    login
}