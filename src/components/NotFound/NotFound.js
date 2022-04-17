import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import notFoundImg from '../../assets/images/404.png';

const NotFound = () => {
	const navigate = useNavigate();

	const handlePreviousPage = () => {
		navigate(-1);
	};

	return (
		<Container>
			<div className="text-center py-5 mt-4">
				<img className="w-100" src={notFoundImg} alt="not found! 404 error" />
				<h1 className="error-text-color pt-3">Ops!! Page Not Found!</h1>
				<Button
					onClick={handlePreviousPage}
					variant="outline-danger"
					className="generic-bg-color rounded-pill px-5 fw-bold 5 mt-3 text-uppercase"
				>
					Go back
				</Button>
			</div>
		</Container>
	);
};

export default NotFound;
