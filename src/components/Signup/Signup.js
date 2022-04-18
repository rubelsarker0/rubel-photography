import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Col, Button, Container, Form, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const handleEmailRegistration = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(email, password);
	};

	if (user) {
		navigate('/home');
	}
	return (
		<section
			style={{ minHeight: '650px' }}
			className="bg-transparent d-flex py-3 align-items-center"
		>
			<Container>
				<Row lg={1} xs={1} className="g-3">
					<Col className="w-lg-50 mx-auto w-sm-100">
						<div className="rounded rounded-3 shadow-lg bg-dark p-3 py-5 p-lg-4 py-xl-5">
							<div className="text-center">
								<img
									className="img-fluid"
									src={logo}
									alt=""
									style={{ height: '100px' }}
								/>
							</div>
							<Form onSubmit={handleEmailRegistration}>
								<Form.Group className="mb-3" controlId="formName">
									<Form.Label>Your Name</Form.Label>
									<Form.Control
										onChange={(e) => setName(e.target.value)}
										type="text"
										placeholder="Enter Your Name"
										required
									/>
									{/* {error.name && (
										<Form.Text id="formName" className="text-danger">
											{error.name}
										</Form.Text>
									)} */}
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										onChange={(e) => setEmail(e.target.value)}
										type="email"
										placeholder="Enter email"
										required
									/>
									{/* {error.email && (
										<Form.Text id="formName" className="text-danger">
											{error.email}
										</Form.Text>
									)} */}
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										placeholder="Password"
										required
									/>
									{/* {error.password && (
										<Form.Text id="formName" className="text-danger">
											{error.password}
										</Form.Text>
									)} */}
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
									Sign Up
								</Button>
							</Form>
							<div className="divider text-center my-3 fs-5">
								<span className="divider-content">Or</span>
							</div>
							<Row lg={2} xs={1} className="g-3">
								<Col>
									<Button
										// onClick={googleSignIn}
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
										// onClick={gitHubSignIn}
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
								Already have an account?
								<Link to="/signin" className="ps-2 fst-italic">
									Sign In
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Signup;
