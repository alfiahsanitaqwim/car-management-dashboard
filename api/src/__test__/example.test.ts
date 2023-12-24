/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

import app from '../..';


const request = require('supertest');
describe('CARS', ()=> {
	test('get cars res 200', async () => {
		await request(app)
			.get('/v1/cars')
			.set('Content-Type', 'application/json')
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});

	const bodyCreateCars = {
		'car_name': 'test',
		'availability': true,
		'capacity': 3,
		'image_url': 'xxx',
		'price': 123,
		'description': 'oke'
	};
	test('create cars res 200', async () => {
		await request(app)
			.get('/v1/cars')
			.send(bodyCreateCars)
			.set('Content-Type', 'application/json')
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});
});



