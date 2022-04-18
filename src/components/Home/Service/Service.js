import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
	const navigate = useNavigate();
	const {
		serviceImg,
		serviceName,
		price,
		serviceDsc: { photoQuantity, location, fileType },
	} = service;

	const handleDetails = () => {
		navigate('/checkout');
	};
	return (
		<CardGroup>
			<Card className="generic-bg-color border border-secondary">
				<Card.Img variant="top" src={serviceImg} />
				<Card.Body>
					<Card.Title className="text-white text-end fs-4">
						{serviceName}
					</Card.Title>
					<Card.Text className="text-muted text-start fs-5">
						<p>Price: {`$${price}`}</p>
						<p>Photo Quantity: {photoQuantity}</p>
						<p>Location: {location}</p>
						<p>File Type: {fileType}</p>
					</Card.Text>
				</Card.Body>
				<Card.Footer className="d-flex align-items-center justify-content-center mb-3">
					<Button
						variant="warning"
						className="rounded-pill px-4 generic-bg-color text-uppercase generic-text-color"
						size="lg"
						onClick={handleDetails}
					>
						<FontAwesomeIcon
							className="fa-1x generic-text-color me-3"
							icon={faInfo}
						/>
						Details
					</Button>
				</Card.Footer>
			</Card>
		</CardGroup>
	);
};

export default Service;
