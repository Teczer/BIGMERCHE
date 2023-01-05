import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import Product from "../product/Product";


const baseURL = "https://fakestoreapi.com/products/category/jewelery";
function Categories() {
	const [categorie, setCategorie] = useState();

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setCategorie(response.data);
		});
	}, []);

	// console.log();

	if (!categorie) return null;

	return (
		<>

			{categorie.map((categorie) => (

				<Product key={crypto.randomUUID()} produitProps={categorie} />
			))}
		</>
	);
}

export default Categories;
