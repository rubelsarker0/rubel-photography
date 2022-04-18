import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';

const Appointment = () => {
	return (
		<Col className="pt-5">
			<h5>Make Appointment</h5>
			<hr className="w-50 generic-text-color p-1" />
			<div className="footer-bg-color rounded py-3 px-2 text-white d-flex align-items-center w-75">
				<FontAwesomeIcon
					className="fa-2x generic-text-color ms-3 me-3"
					icon={faPhoneAlt}
				/>
				<div>
					<h5>Call Us </h5>
					<h5>(+051) 424 4962</h5>
				</div>
			</div>
			<p className="text-white mt-4">
				High-standard photography for any kind of occasion!!
			</p>
		</Col>
	);
};

export default Appointment;
