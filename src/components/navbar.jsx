import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import  navbarLogo from '../assets/navbar_logo.png';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	toggleMenu() {
		let navbarToggle = document.getElementById('js-navbar-toggle');
		let navbarList = document.getElementById('js-navbar__list');

		navbarList.classList.toggle('active');
		navbarToggle.classList.toggle('active');
	}

	closeMenu() {
		let navbarToggle = document.getElementById('js-navbar-toggle');
		let navbarList = document.getElementById('js-navbar__list');
		let logoButton = document.getElementById('js-navbar-logo');

		logoButton.addEventListener('click', () => {
			if (navbarToggle.classList.contains('active') && navbarList.classList.contains('active')) {
				navbarToggle.classList.toggle('active');
				navbarList.classList.toggle('active');
			}
		});

		navbarToggle.classList.toggle('active');
		navbarList.classList.toggle('active');
	}

	render() {
		return (
			<nav className="navbar">
				<div className="navbar-toggle" id="js-navbar-toggle" onClick={this.toggleMenu}>
					<div className="bar-one"></div>
					<div className="bar-two"></div>
					<div className="bar-three"></div>
				</div>
				<NavLink className="navbar-logo" id="js-navbar-logo" to="/home" exact>
					<img className="navbar-logo__img" src={navbarLogo} />
				</NavLink>
				<ul className="navbar-list" id="js-navbar__list">
					<li className="navbar-links" onClick={this.closeMenu}>
						<NavLink className="navbar-links" to="/about">About</NavLink>
					</li>
					<li className="navbar-links" onClick={this.closeMenu}>
						<NavLink className="navbar-links" to="/projects">Projects</NavLink>
					</li>
					<li className="navbar-links" onClick={this.closeMenu}>
						<NavLink className="navbar-links" to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default NavBar;