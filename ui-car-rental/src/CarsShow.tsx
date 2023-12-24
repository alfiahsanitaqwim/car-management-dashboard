import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const CarsShow = () => {
	const { id } = useParams();

	const [obj, setObject] = React.useState<any>({});
	React.useEffect(() => {
		(async () => {
			await axios
				.get('http://localhost:3000/v1/cars/' + id)
				.then(({ data }: any) => {
					setObject(data.data);
				})
				.catch((z: any) => {
					console.error(z);
				});
		})();
	}, []);


	console.log(obj);
  
	return <div>
		<div>{obj.car_name}</div>
		<div>{obj.availability}</div>
		<div>{obj.capacity}</div>
		<div>{obj.image_url}</div>
		<div>{obj.price}</div>
		<div>{obj.description}</div>
	</div>;
};

export default CarsShow;
