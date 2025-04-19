import React from "react";
import { useSelector } from "react-redux";
import Login from "./auth/Login"; 
import Welcome from "./auth/Welcome"; 

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div>
      {isLoggedIn ? <Welcome /> : <Login />}
    </div>
  );
};

export default App;
