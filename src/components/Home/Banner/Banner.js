import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../../../assets/images/bannerImage.png';
import './Banner.css';

const Banner = () => {
	const navigate = useNavigate();

	const handleContact = () => {
		navigate('/contact');
	};

	return (
		<section className="generic-bg-color py-5">
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<Col>
						<div className="generic-bg-color rounded p-5 h-auto shadow-lg">
							<h2 className="text-white mb-5 fw-bold">
								Rubel's Photography will give you ultimate photography
								experience.
							</h2>
							<p className="text-secondary text-align-justify mb-5">
								We like what we do!! Rubel Photography combines the classic
								knowledge of traditional portraiture with an innovative and
								contemporary style. Insight Studio is an elite author known for
								offering high-quality products.
							</p>
							<Button
								onClick={handleContact}
								variant="warning"
								className="rounded-pill px-5 generic-bg-color text-uppercase generic-text-color"
								size="lg"
							>
								Contact Us
							</Button>
						</div>
					</Col>
					<Col>
						<img className="w-100 banner-img" src={bannerImage} alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
