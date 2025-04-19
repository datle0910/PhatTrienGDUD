import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userInfo = { username, email: `${username}@example.com` };
    dispatch(login(userInfo)); 
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
