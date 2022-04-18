import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	const handleSignIn = () => {
		navigate('/signin');
	};

	const handleSignOut = () => {
		signOut(auth);
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
					<div className="d-flex align-items- justify-content-end">
						{user ? (
							<Button
								variant="warning"
								className="rounded-pill px-4 generic-bg-color text-uppercase generic-text-color fw-bold ms-3"
								onClick={handleSignOut}
							>
								Sign Out
							</Button>
						) : (
							<Button
								onClick={handleSignIn}
								variant="warning"
								className="rounded-pill px-4 generic-bg-color text-uppercase generic-text-color fw-bold ms-3"
							>
								<FontAwesomeIcon
									variant="warning"
									className="fa-1x generic-text-color me-2"
									icon={faLock}
								/>
								Sign In
							</Button>
						)}
					</div>
					{user && (
						<div className="d-flex align-items-center ms-3 mt-1">
							<h5 className="fw-bold text-secondary me-3">
								{user.displayName}
							</h5>
							<img
								width="50px"
								className="rounded-circle"
								src={
									user.photoURL
										? user.photoURL
										: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
								}
								alt=""
							/>
						</div>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
