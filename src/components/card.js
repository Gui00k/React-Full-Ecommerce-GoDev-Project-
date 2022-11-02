import React from "react";
import { Link } from "react-router-dom";
import Product from "./product";
import Teste from "./teste";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  const id = item.id;
  return (
    <div className="cards">
      <Link to={`/product/${id}`}>
        <div className="image_box">
          <img src={img} alt="" />
        </div>
      </Link>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Preço -R$ {price.toFixed(2)}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
