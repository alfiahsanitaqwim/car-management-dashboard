import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = React.useState<any>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitRegister = async (e: any) => {
    await axios
      .post('http://localhost:3000/v1/auth/register', form, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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
        <button type="submit" onClick={submitRegister}>
          Register
        </button>
      </div>
      
    </div>
  );
};

export default Register;
