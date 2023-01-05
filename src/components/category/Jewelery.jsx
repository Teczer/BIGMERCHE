import "./category.css";
import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Jewelery() {
  const [getjewelery, setGetJewelery] = useState([]);
  const params = useParams();

  async function getJeweleryData() {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${params.category}`
    );
    console.log(response.data);
    setGetJewelery(response.data);
  }
  useEffect(() => {
    getJeweleryData();
    console.log("ceestmoi", params);
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
