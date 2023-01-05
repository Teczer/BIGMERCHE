import axios from "axios";
import "./product.css";
import Hero from "./product/Hero";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Productmain = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const baseURL = `https://fakestoreapi.com/products/${id}`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <header>
        <i className="fas fa-bars" />
        <h1> {id} My Store</h1>
        <div id="pannier">0</div>
        <i className="fa-solid fa-bag-shopping" />
      </header>
      <Hero product={product} />
    </>
  );
};

export default Productmain;
