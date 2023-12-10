import axios from "axios";
import React from "react";
import { TOKEN } from "../config/token";
import { useNavigate } from "react-router-dom";

const CreateCars = () => {
  const [form, setForm] = React.useState<any>({
    car_name: "",
    availability: true,
    capacity: 0,
    image_url: "",
    price: 0,
    description: "",
  });
  const navigate = useNavigate();

  const submitCars = async () => {
    await axios
      .post("http://localhost:3000/v1/cars/create", form, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(function (response) {
        console.log(response);

        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={() => {
        localStorage.clear();
        navigate('/login')
      }}>logout</button>
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
