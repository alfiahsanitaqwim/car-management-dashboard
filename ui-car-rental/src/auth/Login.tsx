/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [form, setForm] = React.useState<any>({
		email: 'superadmin@mail.com',
		password: '12345',
	});
	const navigate = useNavigate();

	const submitLogin = async () => {
		await axios
			.post('http://localhost:3000/v1/auth/login', form, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			})
			.then(function ({data}) {
				localStorage.setItem('token', data?.token);

				navigate('/cars');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div style={{marginLeft: 20}}>
			<div style={{ marginTop: 20 }}>
				<div>Your email</div>
				<input
					value={form.email}
					type="text"
					onChange={(e: any) =>
						setForm({
							...form,
							email: e.target.value,
						})
					}
				/>
			</div>
			<div style={{ marginTop: 20 }}>
				<div>Your Password</div>
				<input
					value={form.password}
					type="password"
					onChange={(e: any) =>
						setForm({
							...form,
							password: e.target.value,
						})
					}
				/>
			</div>
			<div style={{ marginTop: 20 }}>
				<button type="submit" onClick={submitLogin}>
          Login
				</button>
			</div>
      
		</div>
	);
};

export default Login;
