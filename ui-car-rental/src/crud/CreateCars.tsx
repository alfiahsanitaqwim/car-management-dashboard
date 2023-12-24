/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../components/logout';
import HTTP from '../service/http';

interface PropsForm{
  car_name: string,
  availability: boolean,
  capacity: number,
  image_url: string,
  price: number,
  description: string,
}
const CreateCars = () => {
	const [form, setForm] = React.useState<PropsForm>({
		car_name: '',
		availability: true,
		capacity: 0,
		image_url: '',
		price: 0,
		description: '',
	});
	const navigate = useNavigate();

	const submitCars = async () => {
		HTTP.Post({
			url: '/cars/create',
			body: form,
			callback: () => {
				navigate('/');
			},
		});
	};

	return (
		<div>
			<Logout />
			<label>name</label>
			<input
				type="text"
				onChange={(e: any) =>
					setForm({
						...form,
						car_name: e.target.value,
					})
				}
			/>
			<label>capacity</label>
			<input
				type="number"
				onChange={(e: any) =>
					setForm({
						...form,
						capacity: e.target.value,
					})
				}
			/>
			<label>img url</label>
			<input
				type="text"
				onChange={(e: any) =>
					setForm({
						...form,
						image_url: e.target.value,
					})
				}
			/>
			<label>price</label>
			<input
				type="number"
				onChange={(e: any) =>
					setForm({
						...form,
						price: e.target.value,
					})
				}
			/>
			<label>description</label>
			<input
				type="text"
				onChange={(e: any) =>
					setForm({
						...form,
						description: e.target.value,
					})
				}
			/>
			<button onClick={submitCars}>Test</button>
		</div>
	);
};

export default CreateCars;
