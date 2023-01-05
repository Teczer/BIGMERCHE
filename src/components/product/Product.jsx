import { Link } from "react-router-dom";
// import "./product-style.css";
import '../productsHome/product-style.css'

const Product = ({ produitProps }) => {
	// return <p>Product</p>
	return (
		<Link to={`/product/${produitProps.id}`} key={crypto.randomUUID()}>
			<article className="product" key={produitProps.id}>
				<figure className="wrap-img">
					<img src={produitProps.image} alt="prod" />
				</figure>
				<div className="wrap-info">
					<p className="produit">{produitProps.title}</p>
					<p className="category">{produitProps.category}</p>
					<p className="product-price">{produitProps.price}</p>
					{/* <p className="desc">{produitProps.description}</p> */}
				</div>
			</article>
		</Link>
	);
};

export default Product;
