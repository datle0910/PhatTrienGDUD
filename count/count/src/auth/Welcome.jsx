import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./authSlice"; 

const Welcome = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout()); 
  };

  return (
    <div>
      <h1>Chào mừng, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
};

export default Welcome;
