import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = React.useState<any>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitRegister = async (e: any) => {
    await axios
      .post("http://localhost:3000/v1/auth/register", form, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(function () {
        navigate("/login");
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
              email: e.target.value,
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
              password: e.target.value,
            })
          }
        />
      </div>
      <button type="submit" onClick={submitRegister}>
        Sign In
      </button>
    </div>
  );
};

export default Register;
