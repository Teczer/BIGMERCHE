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

			
			{produit.map((produit) => (
				
				
				<Product key={crypto.randomUUID()} produitProps={produit} />
			))}

		</>
	);
}
