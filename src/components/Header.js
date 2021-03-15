import React from "react";
import "../styles/Header.css";
import Logo from "../styles/images/Tesla.wine.svg"

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<img src={Logo} alt="" />
			</div>
			<div className="header__center">
				<p>Model S</p>
				<p>Model 3</p>
				<p>Model X</p>
				<p>Model Y</p>
				<p>Model 3</p>
              
			</div>
			<div className="header__right">
                <p>Shop</p>
                <p>Account</p>
            </div>
		</div>
	);
};

export default Header;
