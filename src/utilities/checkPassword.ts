import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const salt = 10;

function checkPassword(passEncrypted: string, pass: string){
    return new Promise((resolve, reject) => {
        bcrypt.compare(pass, passEncrypted, (err:Error, isPassCorrect: boolean) => {
            if(err){
                reject(err);
                return;
            }
            resolve(isPassCorrect);
        })
    })
}

module.exports = checkPassword;