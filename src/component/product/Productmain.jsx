import "./product.css";
import Hero from "./product/Hero";
import { Link } from "react-router-dom";

const Productmain = () => {
  return (
    <>
      <Link to={"Product/25"}>test</Link>
      <header>
        <i className="fas fa-bars" />
        <h1>My Store</h1>
        <div id="pannier">0</div>
        <i className="fa-solid fa-bag-shopping" />
      </header>
      <Hero />
    </>
  );
};

export default Productmain;
