/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogAct } from '../controllers/logController';
import { getEmail } from '../controllers/usersController';
import { CarsDataModel } from '../models/CarsData';
import { Request } from 'express';

export default class CarRepository {
	async getAll() {
		return await CarsDataModel.query() || [];
	}
	async post(req: Request) {
		const {
			car_name,
			availability,
			capacity,
			image_url,
			price,
			description,
			id_car_brand,
			id_car_type,
			id_customer
		} = req.body;

		const email = getEmail(req);
		const logDesc = `User email address ${email} create car named ${car_name}, type ${id_car_type}, and brand ${id_car_brand}, at ${new Date()}`;
		await LogAct(1, logDesc);
        
		return await CarsDataModel.query().insert({
			car_name,
			availability,
			capacity,
			image_url,
			price,
			description,
			id_car_brand,
			id_car_type,
			id_customer
		}).returning('*');
	}

	async getById(id: any) {
		return await CarsDataModel.query().where('id_cars', id).first();
	}

	async update(req: Request) {
		const reqParam = req.params;
		const id_cars = Number(reqParam.id);
		const {
			car_name,
			availability,
			capacity,
			image_url,
			price,
			description,
			id_car_brand,
			id_car_type,
			id_customer
		} = req.body;

		const email = getEmail(req);
		const logDesc = `User email address ${email} create car named ${car_name}, type ${id_car_type}, and brand ${id_car_brand}, at ${new Date()}`;
		await LogAct(1, logDesc);

		return await CarsDataModel.query().where('id_cars', '=', id_cars).update({
			car_name,
			availability,
			capacity,
			image_url,
			price,
			description,
			id_car_brand,
			id_car_type,
			id_customer
		});
	}

	async delete(id: any, req: Request) {
		const takeID = await CarsDataModel.query().where('id_cars', id).first();
		const email = getEmail(req);
		const logDesc = `User email address ${email} create car named ${takeID?.car_name}, type ${takeID?.id_car_type}, and brand ${takeID?.id_car_brand}, at ${new Date()}`;
		await LogAct(1, logDesc);

		return await CarsDataModel.query().where('id_cars', id).del();
	}
}