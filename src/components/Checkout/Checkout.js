import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import orderImg from '../../assets/images/order.png';

const Checkout = () => {
	return (
		<section className="generic-bg-color py-5 page-height">
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<Col>
						<img className="w-100 banner-img" src={orderImg} alt="" />
					</Col>
					<Col>
						<div className="generic-bg-color rounded p-5 h-auto shadow-lg">
							<h1 className="text-white mb-5 fw-bold text-uppercase">
								Your order details
							</h1>
							<ul className="fs-5 text-muted">
								<li>$129</li>
								<li>Premium package</li>
								<li>Multiple location Location</li>
								<li>Photo Quantity: 45</li>
								<li>Digital files included</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Checkout;
