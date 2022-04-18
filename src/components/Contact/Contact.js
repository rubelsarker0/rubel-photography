import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ContactForm from './ContactForm/ContactForm';
import ContactInfo from './ContactInfo/ContactInfo';

const Contact = () => {
	return (
		<section className="py-5">
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<ContactInfo />
					<ContactForm />
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
