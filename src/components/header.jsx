import React from 'react';
import earth from "./../assets/earth.png";
import './style.css';

const Header = () => {
	return (
		<header>
			<img src={earth} />
			<p className="header--title">my travel journal.</p>
		</header>
	)

}
export default Header;