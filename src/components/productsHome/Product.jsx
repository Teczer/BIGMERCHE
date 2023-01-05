import axios from "axios";
import "./product-style.css";
import { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://fakestoreapi.com/products";

export default function ProdHome() {
  const [produit, setProduit] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProduit(response.data);
    });
  }, []);

  if (!produit) return null;

  return (
    <>
      {/* tableau pour mapper les produit de l'api */}
      {produit.map((produit) => (
        // l'appelation des prod

        <article classNameName="product" key={produit.id}>
          <figure classNameName="wrap-img">
            <img src={produit.image} alt="prod" />
          </figure>
          <div classNameName="wrap-info">
            <p classNameName="produit">{produit.title}</p>
            <p classNameName="category">{produit.category}</p>
            <p classNameName="product-price">{produit.price}</p>
            {/* <p classNameName="desc">{produit.description}</p> */}
          </div>
        </article>
      ))}
    </>
  );
}
