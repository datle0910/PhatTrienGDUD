
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme); 

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={theme}>
      <h1>Toggle Theme (Dark/Light mode)</h1>
      <button onClick={handleToggle}>Toggle Theme</button>
      <p>The current theme is {theme}</p>
    </div>
  );
}

export default App;
