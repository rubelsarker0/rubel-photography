import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						src={logo}
						width="250"
						className="d-inline-block align-top"
						alt="Rubel Photography logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link
							className="generic-text-color text-uppercase hover-color"
							as={Link}
							to="home"
						>
							Home
						</Nav.Link>
						<Nav.Link
							className="generic-text-color text-uppercase hover-color"
							as={Link}
							to="blog"
						>
							Blog
						</Nav.Link>
						<Nav.Link
							className="generic-text-color text-uppercase hover-color"
							as={Link}
							to="about"
						>
							About
						</Nav.Link>
						<Nav.Link
							className="generic-text-color text-uppercase hover-color"
							as={Link}
							to="contact"
						>
							Contact
						</Nav.Link>
						<Nav.Link
							className="generic-text-color text-uppercase hover-color"
							as={Link}
							to="checkout"
						>
							Checkout
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
