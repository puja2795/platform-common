import React, { useState, useEffect } from "react";
import CartCard from "../Components/CartCard";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://abrupt-skinny-kicker.glitch.me/cart")
      .then((res) => setCart(res.data));
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      {cart?.map((el) => {
        return <CartCard key={el.id} data={el} />;
      })}
    </div>
  );
};

export default Cart;
