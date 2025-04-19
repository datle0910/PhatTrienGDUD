import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems); 

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleAddItem = () => {
    const newItem = {
      id: 1,
      name: "Product A",
      price: 100,
      quantity: 1,
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div>
      <h1>Giỏ Hàng</h1>
      <button onClick={handleAddItem}>Thêm sản phẩm</button>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} - {item.price} x {item.quantity}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Xóa</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value))}
            />
          </li>
        ))}
      </ul>

      <div>
        <p>Tổng số lượng: {getTotalQuantity()}</p>
        <p>Tổng tiền: {getTotalPrice()} VNĐ</p>
      </div>
    </div>
  );
};

export default Cart;
