/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcrypt');

function checkPassword(passEncrypted: string, pass: string){
	return new Promise((resolve, reject) => {
		bcrypt.compare(pass, passEncrypted, (err:Error, isPassCorrect: boolean) => {
			if(err){
				reject(err);
				return;
			}
			resolve(isPassCorrect);
		});
	});
}

export default checkPassword;