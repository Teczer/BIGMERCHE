import { Link } from "react-router-dom";
// import PanierPage from "../../pages/PanierPage";


const Nav = () => {
	return (
		<>
			<header>
				
        <Link to={'/'}> Home </Link>
        <Link to={'/Panier'}> Panier </Link>
        
      
			</header>
		</>
	);
};

{
	/* <Link to={'/'}> </Link>
<Link to={'/Panier'}> </Link>
<Link to={'/Detail'}> </Link> */
}
