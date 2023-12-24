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
	test('create cars res 200', async () => {
		await request(app)
			.post('/v1/cars/create')
			.set('Content-Type', 'application/json')
			.set('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE3MDM0MjU2Mzd9.9rk6Ek54NeQyvpiGlNtQHNN17GaqdID-q3Vyfmxiks4')
			.then((res: any)=> {
				expect(res.statusCode).toBe(500);
			});
	});
	test('update cars res 200', async () => {
		await request(app)
			.put('/v1/cars/update/1')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE3MDM0MjU2Mzd9.9rk6Ek54NeQyvpiGlNtQHNN17GaqdID-q3Vyfmxiks4')
			.then((res: any)=> {
				expect(res.statusCode).toBe(500);
			});
	});
	test('delete cars res 200', async () => {
		await request(app)
			.delete('/v1/cars/delete/9')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.set('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE3MDM0MjU2Mzd9.9rk6Ek54NeQyvpiGlNtQHNN17GaqdID-q3Vyfmxiks4')
			.then((res: any)=> {
				expect(res.statusCode).toBe(404);
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



