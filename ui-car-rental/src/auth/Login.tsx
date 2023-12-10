import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = React.useState<any>({
    email: "superadmin@mail.com",
    password: "12345",
  });
  const navigate = useNavigate();

  const submitLogin = async (e: any) => {
    await axios
      .post("http://localhost:3000/v1/auth/login", form, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(function ({data}) {
        localStorage.setItem('token', data?.token)

        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <label>email</label>
        <input
          value={form.email}
          type="text"
          onChange={(e: any) =>
            setForm({
              ...form,
              car_name: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>password</label>
        <input
          value={form.password}
          type="password"
          onChange={(e: any) =>
            setForm({
              ...form,
              capacity: e.target.value,
            })
          }
        />
      </div>
      <button type="submit" onClick={submitLogin}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
