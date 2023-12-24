/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Logout from '../components/logout';
import HTTP from '../service/http';

const EditCars = () => {
	const { id } = useParams();
	const [form, setForm] = React.useState<any>({
		car_name: '',
		availability: true,
		capacity: 0,
		image_url: '',
		price: 0,
		description: '',
	});

	React.useEffect(() => {
		(async () => {
			HTTP.Get({
				url: `/cars/${id}`,
				callback: (obj: any) => {
					setForm({
						car_name: obj.car_name,
						availability: obj.availability,
						capacity: obj.capacity,
						image_url: obj.image_url,
						price: obj.price,
						description: obj.description,
					});
				},
			});
		})();
	}, []);

	const submitCars = async () => {
		HTTP.Put({
			url: `/cars/update/${id}`,
			body: form,
			callback: () => {
				window.location.reload();
			},
		});
	};

	return (
		<div>
			{id}
			<Logout />
			<NavLink to="/cars">Cars List</NavLink>
			<div style={{ marginTop: 20 }}>
				<div>name</div>
				<input
					value={form.car_name}
					type="text"
					onChange={(e: any) =>
						setForm({
							...form,
							car_name: e.target.value,
						})
					}
				/>
			</div>
			<div style={{ marginTop: 20 }}>
				<div>capacity</div>
				<input
					value={form.capacity}
					type="number"
					onChange={(e: any) =>
						setForm({
							...form,
							capacity: e.target.value,
						})
					}
				/>
			</div>
			<div style={{ marginTop: 20 }}>
				<div>img url</div>
				<input
					value={form.image_url}
					type="text"
					onChange={(e: any) =>
						setForm({
							...form,
							image_url: e.target.value,
						})
					}
				/>
			</div>
			<div style={{ marginTop: 20 }}>
				<div>price</div>
				<input
					value={form.price}
					type="number"
					onChange={(e: any) =>
						setForm({
							...form,
							price: e.target.value,
						})
					}
				/>
			</div>
			<div style={{ marginTop: 20 }}>
				<div>description</div>
				<input
					value={form.description}
					type="text"
					onChange={(e: any) =>
						setForm({
							...form,
							description: e.target.value,
						})
					}
				/>
			</div>
			<button onClick={submitCars}>Update</button>
		</div>
	);
};

export default EditCars;
