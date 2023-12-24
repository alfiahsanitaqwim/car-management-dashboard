/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response } from 'express';

const bcrypt = require('bcrypt');
const salt = 10;

function encryptPassword(pass: string){
	return new Promise((resolve, reject) => {
		bcrypt.hash(pass, salt, (err: Error, passEncrypted: string) => {
			if(err){
				reject(err);
				return;
			}
			resolve(passEncrypted);
		});
	});
}

export default encryptPassword;