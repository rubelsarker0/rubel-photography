import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
	const [services] = useServices();
	return (
		console.log(services),
		(
			<section className="py-5 bg-blue-500">
				<Container>
					<div className="text-center">
						<h1 className="text-white text-center text-uppercase mb-2">
							Choose your Service
						</h1>
						<p className="text-secondary text-center w-50 mx-auto">
							We give our customer the best deal in the market, we provide the
							best service in the industry. Come and have a chat with us if you
							have any concern about our price, we can have give you the service
							you need.
						</p>
						<Row lg={3} xs={1} className="g-4 py-5">
							{services.map((service) => (
								<Service key={service.id} service={service} />
							))}
						</Row>
					</div>
				</Container>
			</section>
		)
	);
};

export default Services;
