import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationDot,
	faPhone,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
	return (
		<Col>
			<div className="location-details">
				<h1 className="text-uppercase fw-bold">Let's have a coffee</h1>
				<div className="address">
					<div className="d-flex align-items-center">
						<p>
							<FontAwesomeIcon
								className="fa-2x generic-text-color me-3"
								icon={faLocationDot}
							/>
						</p>
						<p className="generic-text-color">
							1147 MARSH ST. <br /> Dublin 12, <br /> Dublin Ireland
						</p>
					</div>
					<p className="text-muted">
						Our studio space is located in downtown Dublin 12. right in the
						heart of Central Coast, Dublin. Conveniently surrounded by some of
						the world’s most talented photographer. Come on by.
					</p>
				</div>
			</div>
			<div className="new-projects">
				<h1 className="text-uppercase fw-bold py-4">New Projects</h1>
				<p className="generic-text-color">
					<span>
						<FontAwesomeIcon
							className="fs-4 generic-text-color me-3"
							icon={faPhone}
						/>
					</span>
					P: (+051) 424 4962
				</p>
				<p className="generic-text-color">
					<span>
						<FontAwesomeIcon
							className="fs-4 generic-text-color me-3"
							icon={faEnvelope}
						/>
					</span>
					E: rubelsarker0@outlook.com
				</p>
			</div>
		</Col>
	);
};

export default ContactInfo;
