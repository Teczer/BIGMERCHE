import axios from "axios";
import React from "react";

// const Product = () =>{
  const baseURL = "https://fakestoreapi.com/products/1";

  export default function Api() {
    const [produit, setProduit] = React.useState (null)

    React.useEffect(()=>{
      axios.get(baseURL).then((response)=>{
        setProduit(response.data);
      })
    }, []);

    if (!produit) return null;

    return (
      <div>
        <h1>{produit.title}</h1>
        <p>{produit.description}</p>
        <img src={produit.image} alt=""  />
      </div>
    )
  }




