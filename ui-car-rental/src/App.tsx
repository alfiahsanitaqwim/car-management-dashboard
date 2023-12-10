import { NavLink } from "react-router-dom";


function App() {
 
  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: 10}}>
      <NavLink to={"/login"}>LOGIN</NavLink>
      <NavLink to={"/register"}>REGISTER</NavLink>
      <NavLink to={"/cars"}>CARS</NavLink>
    </div>
  );
}

export default App;
