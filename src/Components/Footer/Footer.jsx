import React from 'react';
import './Footer.css';

export default function Footer(){
	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-brand">
					<div className="brand-circle">B</div>
					<div className="brand-name">Brooklyn</div>
				</div>

				<nav className="footer-nav">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#services">Services</a>
					<a href="#process">Process</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#blog">Blog</a>
					<a href="#contact">Contact</a>
				</nav>

				<div className="footer-copy">Copyright © 2022 Picto.</div>
			</div>
		</footer>
	);
}

