/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import jwt from 'jsonwebtoken';

interface Props {
    req:Request,
    access: 'superadmin' | 'admin' | 'superandadmin' 
}
export const userRole = async (props: Props) => {
	const {req, access} = props;
	try {
		const bearerToken = req.headers.authorization;
		const token = bearerToken?.split('Bearer ')?.[1] || '';
		const tokenPayload:any = await jwt.verify(token, process.env.SIGNATURE_KEY || 'Rahasia');         
		if(access === 'superadmin'){
			if(tokenPayload?.role === 1){
				return true;
			}
		} else if(access === 'admin'){
			if(tokenPayload?.role === 2){
				return true;
			}
		}else if(access === 'superandadmin'){            
			if(tokenPayload?.role === 1  || tokenPayload?.role === 2){
				return true;
			}
		}
		return false; 
	}catch{
		return false;   
	}
};

