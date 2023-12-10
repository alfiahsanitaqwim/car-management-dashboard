import axios from "axios";
import React from "react";

interface PropsListCars {
  id_cars: number;
  car_name: string;
  availability: boolean;
  capacity: number;
  image_url: string;
  price: number;
  description: string;
  id_car_type: number;
  id_car_brand: number;
  id_customer: number;
}

function App() {
  const [list, setList] = React.useState<any>([]);
  React.useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/v1/cars")
        .then(({ data }: any) => {
          setList(data.data);
        })
        .catch((z: any) => {
          console.error(z);
        });
    })();
  }, []);
  return (
    <div>
      {list?.map((dt: PropsListCars, index: number) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: "lightgrey", padding: 10, margin: 10 }}
          >
            <div>{dt?.car_name}</div>
            <div>{dt?.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
