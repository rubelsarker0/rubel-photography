import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Col } from 'react-bootstrap';
import logo from '../../../../assets/images/logo.png';

const ProjectDsc = () => {
	return (
		<Col>
			<img className="img-fluid" src={logo} alt="" />
			<p className="text-white my-3 text-align-justify">
				We like what we do!! My mission is evident - I want to provide the
				highest standard and best quality of photography experience to my
				clients with a combination of classic traditional portraiture with an
				innovative and contemporary style.
			</p>
			<div>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 generic-text-color"
						icon={faFacebook}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 generic-text-color"
						icon={faTwitter}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 generic-text-color"
						icon={faYoutube}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x generic-text-color"
						icon={faInstagram}
					/>
				</a>
			</div>
		</Col>
	);
};

export default ProjectDsc;
