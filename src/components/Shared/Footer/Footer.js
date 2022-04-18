import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Appointment from './Appointment/Appointment';
import ContactDetails from './ContactDetails/ContactDetails';
import './Footer.css';
import ProjectDsc from './ProjectDsc/ProjectDsc';

const Footer = () => {
	return (
		<footer className="footer-bg text-white pt-5">
			<Container>
				<Row lg={3} xs={1} className="g-5">
					<ProjectDsc />
					<ContactDetails />
					<Appointment />
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
