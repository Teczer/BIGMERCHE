import "./hero.css";

const Hero = ({ product }) => {
  return (
    <>
      <section>
        <figure>
          <img src={product.image} alt="" />
        </figure>
      </section>

      <section id="wrapper">
        <div id="head">
          <h1>{product.title}</h1>
          <h3>{product.price}</h3>
          <p>{product.description}</p>
        </div>
      </section>
      <section className="category">
        <h2>{product.category}</h2>
        <div id="font">
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
      </section>
      {/* rome-ignore lint/a11y/useButtonType: <explanation> */}
      <button>Add Card</button>
    </>
  );
};

export default Hero;
