import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../categories/Categories";
import "./header-style.css";

const Header = () => {
	// to change burger classes
	const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
	const [menu_class, setMenuClass] = useState("menu hidden");
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	// toggle burger menu change
	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass("burger-bar clicked");
			setMenuClass("menu visible");
		} else {
			setBurgerClass("burger-bar unclicked");
			setMenuClass("menu hidden");
		}
		setIsMenuClicked(!isMenuClicked);
	};

	return (
		<div style={{ width: "100%", height: "20vh" }}>
			<nav>
				{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div className="burger-menu" onClick={updateMenu}>
					<div className={burger_class}> </div>
					<div className={burger_class}> </div>
					<div className={burger_class}> </div>
				</div>
				<h2>BIG MERCH</h2>
				<div className="panier">
					<Link to="panier">
						<div class="panier">
							<p>3</p>
							<i class="fa-solid fa-cart-shopping"> </i>
						</div>
					</Link>
				</div>
			</nav>

			<div className={menu_class}>
				<h1>salut</h1>
				<Categories />
			</div>
		</div>
	);
};

export default Header;