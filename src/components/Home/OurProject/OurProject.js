import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projectImg1 from '../../../assets/images/projectImg1.jpg';
import projectImg2 from '../../../assets/images/projectImg2.jpg';
import projectImg3 from '../../../assets/images/projectImg3.jpg';
import projectImg4 from '../../../assets/images/projectImg4.jpg';
import projectImg5 from '../../../assets/images/projectImg5.jpg';
import projectImg6 from '../../../assets/images/projectImg6.jpg';

const OurProject = () => {
	return (
		<section>
			<Container>
				<h1 className="text-white text-start text-uppercase mb-5">
					Our Projects
				</h1>
				<Row lg={3} xs={1} className="g-2">
					<Col>
						<img
							className="img-fluid banner-img border border-secondary rounded-0"
							src={projectImg1}
							alt=""
						/>
					</Col>
					<Col>
						<img
							className="img-fluid banner-img border border-secondary rounded-0"
							src={projectImg2}
							alt=""
						/>
					</Col>
					<Col>
						<img
							className="img-fluid banner-img border border-secondary rounded-0"
							src={projectImg3}
							alt=""
						/>
					</Col>
					<Col>
						<img
							className="img-fluid banner-img border border-secondary rounded-0 h-100"
							src={projectImg4}
							alt=""
						/>
					</Col>
					<Col>
						<img
							className="img-fluid banner-img border border-secondary rounded-0"
							src={projectImg5}
							alt=""
						/>
					</Col>
					<Col>
						<img
							className="img-fluid banner-img border border-secondary rounded-0"
							src={projectImg6}
							alt=""
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default OurProject;
