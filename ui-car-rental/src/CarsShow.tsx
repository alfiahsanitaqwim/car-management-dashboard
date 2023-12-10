import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const CarsShow = () => {
  let { id } = useParams();

  const [obj, setObject] = React.useState<any>({});
  React.useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/v1/cars/" + id)
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
    <div>{obj.description}</div>
  </div>;
};

export default CarsShow;
