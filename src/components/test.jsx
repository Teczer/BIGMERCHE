import React, { useEffect } from "react";
import { useState } from "react";
import "./test.css";
import axios from "axios";

function Test() {
  const [merchData, setMerchData] = useState([]);

  async function getMerchData() {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setMerchData(response.data);
  }

  useEffect(() => {
    getMerchData();
  }, []);
  return (
    <main>
      <div classNameName="products">
        <h1>Mon panier</h1>
        <p classNameName="total">Total : 270 €</p>
        <button classNameName="commander">
          Passer la commande (3 articles)
        </button>
        {merchData.map((value) => (
          <div classNameName="product" key={value.id}>
            <div classNameName="wrap-img">
              <img src={value.image} alt="product" />
            </div>
            <div classNameName="wrap-info">
              <p classNameName="produit">{value.title}</p>
              <p classNameName="note">Noté {value.rating.rate}</p>
              <p classNameName="product-price">100 €</p>
              <p classNameName="avaible">
                Il reste {value.rating.count} exemplaires disponible
              </p>
            </div>
          </div>
        ))}

        <div classNameName="separator" />
      </div>
    </main>
  );
}

export default Test;
