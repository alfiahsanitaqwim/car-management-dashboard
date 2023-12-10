import axios from "axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logout from "../components/logout";
import { TOKEN } from "../config/token";
import HTTP from "../service/http";

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

function List() {
  const [list, setList] = React.useState<any>([]);
  React.useEffect(() => {
    (async () => {
      HTTP.Get({
        url: `/cars`,
        callback: (obj: any) => {
          setList(obj);

        },
      });
    })();
  }, []);

  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (typeof window !== undefined) {
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    }
  }, []);

  const DeleteCars = async (id: any) => {
    await axios
      .post(
        `http://localhost:3000/v1/cars/delete/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(({ data }: any) => {
        window.location.reload();
      })
      .catch((z: any) => {
        console.error(z);
      });
  };
  return (
    <div>
      {isAuth ? <Logout /> : <NavLink to="/login">LOGIN</NavLink>}
      {list?.map((dt: PropsListCars, index: number) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "lightgrey",
              padding: 10,
              margin: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <NavLink to={`/cars/${dt.id_cars}`}>
                <div>{dt?.car_name}</div>
              </NavLink>
              <div>{dt?.description}</div>
            </div>
            {isAuth && (
              <div>
                <button onClick={() => DeleteCars(dt.id_cars)}>Delete</button>
                <NavLink to={`/cars/${dt?.id_cars}/edit`}>
                  <button>Edit</button>
                </NavLink>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default List;
