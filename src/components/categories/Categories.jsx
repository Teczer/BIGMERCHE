import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

function Categories() {
	// const {id} = useParams();
	const baseURL = "https://fakestoreapi.com/products/categories";
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

				<p key={crypto.randomUUID()}>{categorie}</p>
			))}
		</>
	);
}

export default Categories;
