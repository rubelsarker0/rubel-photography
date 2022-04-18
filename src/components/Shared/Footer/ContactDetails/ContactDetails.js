import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationArrow,
	faEnvelopeOpen,
	faClock,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => {
	return (
		<div className="ps-5 pt-5">
			<h5>Contact Details</h5>
			<hr className="generic-text-color w-50 p-1" />
			<p>
				<FontAwesomeIcon
					className="fa-1x generic-text-color me-3"
					icon={faLocationArrow}
				/>
				Rubel Sarker Building 10, Dublin-12
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x generic-text-color me-3"
					icon={faEnvelopeOpen}
				/>
				rubelsarker0@outlook.com
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x generic-text-color me-3"
					icon={faClock}
				/>
				9 AM - 5 PM , Monday - Saturday
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x generic-text-color me-3"
					icon={faPhoneAlt}
				/>
				(+051) 424 4962
			</p>
		</div>
	);
};

export default ContactDetails;
