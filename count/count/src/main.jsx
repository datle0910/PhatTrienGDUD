import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./shoppingcart/store";
import Cart from "./shoppingcart/Cart"; 

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <Provider store={store}>
    <Cart />
  </Provider>
);