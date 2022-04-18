import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Header.css';

const Header = () => {
	const navigate = useNavigate();

	const handleSignIn = () => {
		navigate('/signin');
	};
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="generic-bg-color"
			variant="dark"
			sticky="top"
		>
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

					<div className="d-flex align-items- justify-content-end ps-3">
						<Button
							onClick={handleSignIn}
							variant="warning"
							className="rounded-pill px-4 generic-bg-color text-uppercase generic-text-color fw-bold"
						>
							<FontAwesomeIcon
								className="fa-1x me-3 generic-text-color"
								icon={faLock}
							/>
							Sign In
						</Button>
					</div>
					{/* <div className="d-flex align-items- justify-content-end">
						{user ? (
							<Button
								variant="warning"
								className="rounded-pill px-4 generic-bg-color text-uppercase generic-text-color fw-bold"
								onClick={logOut}
							>
								Sign Out
							</Button>
						) : (
							<Button
								onClick={handleSignIn}
								className="btn-login rounded-pill px-5 fw-bold"
							>
								<FontAwesomeIcon
									variant="warning"
									className="rounded-pill px-4 generic-bg-color text-uppercase generic-text-color fw-bold"
									icon={faLock}
								/>
								Sign In
							</Button>
						)}
					</div> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
