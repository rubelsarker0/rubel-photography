import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
	return (
		<Container>
			<div className="text-center mx-auto pb-5">
				<Spinner
					style={{ width: '5rem', height: '5rem' }}
					animation="border"
					variant="warning"
				/>
			</div>
		</Container>
	);
};

export default LoadingSpinner;
