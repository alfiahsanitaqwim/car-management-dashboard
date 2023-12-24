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
	test('get cars one res 200', async () => {
		await request(app)
			.get('/v1/cars/1')
			.set('Content-Type', 'application/json')
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	});
});
describe('AUTH', ()=> {
	test('LOGIN', async () => {
		await request(app)
			.post('/v1/auth/login')
			.send({
				email: 'superadmin@mail.com',
				password: '12345'
			})
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	}, 10000);

	test('REGISTER', async () => {
		await request(app)
			.post('/v1/auth/login')
			.send({
				email: 'superadmin@mail.com',
				password: '12345'
			})
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.then((res: any)=> {
				expect(res.statusCode).toBe(200);
			});
	}, 10000);
});



