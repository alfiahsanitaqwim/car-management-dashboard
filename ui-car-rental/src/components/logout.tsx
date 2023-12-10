import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        localStorage.clear();
        navigate("/login");
      }}
    >
      logout
    </button>
  );
};

export default Logout;
