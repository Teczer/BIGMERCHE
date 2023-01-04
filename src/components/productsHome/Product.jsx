import axios from "axios";
// import React from "react";
import "./product-style.css";
import { useState } from "react";
import React, { useEffect } from "react";


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
				<article className="product">
					<figure className="wrap-img">
						<img src={produit.image} alt="prod" />
					</figure>
					<div className="wrap-info">
						<p className="produit">{produit.title}</p>
						<p className="category">{produit.category}</p>
						<p className="product-price">{produit.price}</p>
						<p className="desc">{produit.description}</p>
					</div>
				</article>
			))}
		</>
	);
}
