import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Signin.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [error, setError] = useState('');
	const navigate = useNavigate();
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const handleEmailSignIn = (event) => {
		event.preventDefault();
		signInWithEmailAndPassword(email, password);
	};

	const googleSignIn = () => {};

	const gitHubSignIn = () => {};

	if (user) {
		navigate('/home');
	}
	return (
		<section
			style={{ minHeight: '650px' }}
			className="bg-transparent my-5 d-flex align-items-center"
		>
			<Container>
				<Row lg={1} xs={1} className="g-3">
					<Col className="w-lg-50 mx-auto w-sm-100">
						<div className="rounded rounded-3 shadow-lg bg-dark p-3 py-5 p-lg-4 py-xl-5">
							<div className="text-center">
								<img
									className="img-fluid mb-3"
									src={logo}
									alt=""
									style={{ height: '100px' }}
								/>
							</div>
							{error && <h3 className="text-danger text-center">{error}</h3>}
							<Form onSubmit={handleEmailSignIn}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										onChange={(e) => setEmail(e.target.value)}
										type="email"
										placeholder="Enter email"
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										placeholder="Password"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Remember me" />
								</Form.Group>
								<Button
									variant="dark"
									className="rounded-pill  generic-bg-color text-uppercase generic-text-color w-100"
									size="lg"
									type="submit"
								>
									Sign In
								</Button>
							</Form>
							<div className="divider text-center my-3 fs-5">
								<span className="divider-content">Or</span>
							</div>
							<Row lg={2} xs={1} className="g-3">
								<Col>
									<Button
										onClick={googleSignIn}
										variant="secondary"
										className="w-100 text-white fw-bold"
									>
										<FontAwesomeIcon
											className="fa-1x text-white me-2"
											icon={faGoogle}
										/>
										Google Sign In
									</Button>
								</Col>
								<Col>
									<Button
										onClick={gitHubSignIn}
										variant="secondary"
										className="w-100 fw-bold"
									>
										<FontAwesomeIcon
											className="fa-1x text-white me-2"
											icon={faGithub}
										/>
										Github Sign In
									</Button>
								</Col>
							</Row>
							<div className="text-center generic-text-color mt-3">
								Don't have an account?
								<Link className="fst-italic ps-2" to="/signup">
									Sign up
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Signin;
