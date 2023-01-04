import "./product.css";
import Hero from "./product/Hero";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Productmain = () => {
  const { id } = useParams();
  return (
    <>
      <Link to={"product/30"}>test</Link>

      <header>
        <i className="fas fa-bars" />
        <h1> {id} My Store</h1>
        <div id="pannier">0</div>
        <i className="fa-solid fa-bag-shopping" />
      </header>
      <Hero />
    </>
  );
};

export default Productmain;
