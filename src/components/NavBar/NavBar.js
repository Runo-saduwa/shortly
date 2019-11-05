import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import './NavBar.css';

const NavBar = () => {
	const [ menu, setMenu ] = useState(false);
	const toggleMenu = () => {
		const menuState = menu;
		setMenu(!menuState);
		console.log(menu);
	};
	return (
		<nav className="navbar">
			<div className="navbarContainer">
				<div>
					<img src={logo} alt="logo" />
					<div className="mainLinks hideOnMobile">
						<span>
							<a href="">features</a>
						</span>
						<span>
							<a href="">pricing</a>
						</span>
						<span>
							<a href="">resources</a>
						</span>
					</div>
				</div>

				<div>
					<div className="authLinks hideOnMobile">
						<span>
							<a href="">login</a>
						</span>
						<span className="signUpDesktop">
							<a href="">sign up</a>
						</span>
					</div>
					<i onClick={toggleMenu} className="hamburger fas fa-bars" />
				</div>
			</div>

			{menu ? (
				<div className="mobileNav">
					<div className="mobileNavContainer">
						<span>
							<a href="jjd.com">features</a>
						</span>
						<span>
							<a href="nmjkx.cpod">pricing</a>
						</span>
						<span>
							<a href="mk.cmkc">resources</a>
						</span>

						<div className="horizontal-line" />
						<span>
							<a href="jmxsj.cockc">login</a>
						</span>
						<span className="signUpMobile">
							<a href="www.runo.codes">sign up</a>
						</span>
					</div>
				</div>
			) : null}
		</nav>
	);
};

export default NavBar;
