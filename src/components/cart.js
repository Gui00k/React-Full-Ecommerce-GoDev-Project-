import React, { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [ids, setId] = useState();

  const HandleId = (id, price, title, qtd, total) => {
    // let body = { id, price, title, qtd, total };

    try {
      const body = { id, price, title, qtd, total };
      console.log(body);

      const response = fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //refreh na pagina quando executado
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }

    // console.log(body);
  };
  //

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => ((ans += item.amount * item.price), item.amount));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="container">
          <div style={{ color: "black" }} className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p style={{ color: "black" }}>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price.toFixed(2)}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() =>
                  HandleId(item.id, item.price, item.title, item.amount, price)
                }
              >
                finalizar
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Valor Total no carrinho</span>
        <span>R$ - {price.toFixed(2)}</span>
      </div>
    </article>
  );
};

export default Cart;
