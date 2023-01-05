import "./category.css";
import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";

function Jewelery() {
  const [getjewelery, setGetJewelery] = useState([]);

  async function getJeweleryData() {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    console.log(response.data);
    setGetJewelery(response.data);
  }
  useEffect(() => {
    getJeweleryData();
  }, []);
  return (
    <>
      {getjewelery.map((value) => (
        <section key={value.id}>
          <a href="">
            <img src={value.image} alt="" />
          </a>

          <hgroup>
            <h4>
              <a href="">{value.title} </a>
            </h4>
            <h3>Brandd</h3>
          </hgroup>

          <h3>{value.price} $</h3>
        </section>
      ))}
    </>
  );
}

export default Jewelery;
