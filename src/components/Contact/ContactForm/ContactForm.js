import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const ContactForm = () => {
	return (
		<Col>
			<div className="rounded rounded-3 shadow-lg generic-bg-color p-3 py-5 p-lg-4 py-xl-5">
				<h2 className="generic-text-color mb-3 text-center text-uppercase">
					Send us a message
				</h2>
				<Form>
					<Form.Group className="mb-3" controlId="Name">
						<Form.Label className="text-white">Name</Form.Label>
						<Form.Control
							className="generic-bg-color"
							type="text"
							placeholder="Enter Name"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="regular-text-color">
							Email address
						</Form.Label>
						<Form.Control
							className="generic-bg-color"
							type="email"
							placeholder="Enter email"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control className="generic-bg-color" as="textarea" rows={3} />
					</Form.Group>
					<Button
						variant="warning"
						className="rounded-pill px-5 generic-bg-color text-uppercase generic-text-color w-100"
						size="lg"
						type="submit"
					>
						Contact Us
					</Button>
				</Form>
			</div>
		</Col>
	);
};

export default ContactForm;
