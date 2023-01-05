import React, { useEffect } from "react";
import { useState } from "react";
import "./test.css";
import axios from "axios";
import Header from "./header/Header";

function PanierPage() {
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
			<Header />
			<div className="products">
				<h1>Mon panier</h1>
				<p className="total">Total : 270 €</p>
				<button className="commander">Passer la commande (3 articles)</button>
				{merchData.map((value) => (
					<div className="product" key={value.id}>
						<div className="wrap-img">
							<img src={value.image} alt="product" />
						</div>
						<div className="wrap-info">
							<p className="produit">{value.title}</p>
							<p className="note">Noté {value.rating.rate}</p>
							<p className="product-price">100 €</p>
							<p className="avaible">
								Il reste {value.rating.count} exemplaires disponible
							</p>
						</div>
					</div>
				))}

				<div className="separator" />
			</div>
		</main>
	);
}

export default PanierPage;
