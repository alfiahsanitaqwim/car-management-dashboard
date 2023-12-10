import axios from "axios";
import React from "react";
import { TOKEN } from "../config/token";
import { useNavigate } from "react-router-dom";
import Logout from "../components/logout";
import HTTP from "../service/http";

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
    HTTP.Post({
      url: `/cars/create`,
      body: form,
      callback: () => {
        navigate("/");
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
