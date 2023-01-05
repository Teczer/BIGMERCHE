import axios from "axios";	
import "./product-style.css";
import { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "../product/Product";

const baseURL = "https://fakestoreapi.com/products";

export default function ProductHome() {
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
				// l'appelation des prod // {crypto.randomUUID() = serre a generer des keys
				<Product key={crypto.randomUUID()} produitProps={produit} />
			))}
		</>
	);
}
