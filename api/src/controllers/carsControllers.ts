import CarService from '../services/cars';
import { Request, Response } from 'express';
import { userRole } from './userRolesController';

export const get = async (req:Request, res: Response)=> { 
	new CarService().getAll().then((response)=> {
		res.status(200).json({
			message: 'success', 
			data: response
		});
	}).catch((err)=> {
		res.status(200).json({
			message: 'success', 
			data: err
		});
	});
};

export const getById = async (req:Request, res:Response) => {
	const id = req.params.id;
	new CarService().getById(id).then((response)=> {
		res.status(200).json({
			message: 'Get by id succesfully', 
			data: response
		});
	}).catch((err)=> {
		res.status(200).json({
			message: 'error', 
			data: err
		});
	});
}; 

export const post = async (req: Request, res: Response)=> {  
	const role = await userRole({
		req,
		access: 'superandadmin'
	});
	if(role){
		new CarService().post(req).then((response)=> {
			res.status(200).json({
				message: 'Create successfully', 
				data: response
			});
		}).catch((err)=> {
			res.status(200).json({
				message: 'error', 
				data: err
			});
		});
	}else{
		res.status(500).json({
			message: 'Unauthorized. Action is denied', 
		});
	}
};

export const deleteById = async (req:Request, res: Response) => {
	const role = await userRole({
		req,
		access: 'superandadmin'
	});
	const reqParam  = req.params;
	const id_car = Number(reqParam.id);
	if (role) {
		new CarService().delete(id_car, req).then((response)=> {
			res.status(200).json({
				message: 'Delete successfully', 
				data: response
			});
		}).catch((err)=> {
			res.status(200).json({
				message: 'error', 
				data: err
			});
		});
	} else{
		res.status(500).json({
			message: 'Unauthorized. Action is denied', 
		});
	}
};

export const updateById = async (req:Request, res: Response) => {
	const role = await userRole({
		req,
		access: 'superandadmin'
	});
	if (role) {
		new CarService().update(req).then((response)=> {
			res.status(200).json({
				message: 'Update successfully', 
				data: response
			});
		}).catch((err)=> {
			res.status(200).json({
				message: 'error', 
				data: err
			});
		});
	}else{
		res.status(500).json({
			message: 'Unauthorized. Action is denied', 
		});
	}
};
