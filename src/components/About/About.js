import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faVideo,
	faMicrophoneLines,
	faEye,
	faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImage from '../../assets/images/about_me.jpg';

const About = () => {
	return (
		<section className="generic-bg-color about-section pt-5 page-height">
			<Container>
				<Row lg={2} xs={1} className="g-2">
					<Col md={{ order: 'first' }} lg={{ order: 'first' }}>
						<div className="generic-bg-color rounded p-5 h-auto shadow-lg">
							<p className="generic-text-color text-uppercase">
								Nice to meet you!!
							</p>
							<h1 className="text-white mb-4 fw-bold">
								My Name is <br />
								Rubel Sarker
							</h1>
							<p className="text-secondary text-align-justify mb-1">
								I was born and raised in Bangladesh. Fortunately, my parents are
								from Bangladesh also, but I became myself when I moved to
								Ireland for higher study. While studying at the university, I
								find out I am very passionate about photography. I set up a club
								and run it for the entire four years, which own the society of
								the year three times.
							</p>
						</div>

						<Row lg={2} xs={1}>
							<Col>
								<div className="d-flex align-items-center justify-content-center">
									<p>
										<FontAwesomeIcon
											className="fa-2x text-white me-3"
											icon={faVideo}
										/>
									</p>
									<p className="fs-2 generic-text-color pe-3">150</p>
									<p className=" text-muted text-uppercase">
										Euro <br /> of Equipment
									</p>
								</div>
							</Col>
							<Col>
								<div className="d-flex align-items-center justify-content-center">
									<p>
										<FontAwesomeIcon
											className="fa-2x text-white me-3"
											icon={faMicrophoneLines}
										/>
									</p>
									<p className="fs-2 generic-text-color pe-3">193</p>
									<p className=" text-muted text-uppercase">
										studio
										<br />
										session
									</p>
								</div>
							</Col>
							<Col>
								<div className="d-flex align-items-center justify-content-center">
									<p>
										<FontAwesomeIcon
											className="fa-2x text-white me-3"
											icon={faEye}
										/>
									</p>
									<p className="fs-2 generic-text-color pe-3">295</p>
									<p className=" text-muted text-uppercase">
										finished
										<br />
										photosession
									</p>
								</div>
							</Col>
							<Col>
								<div className="d-flex align-items-center justify-content-center">
									<p>
										<FontAwesomeIcon
											className="fa-2x text-white me-3"
											icon={faUsersViewfinder}
										/>
									</p>
									<p className="fs-2 generic-text-color pe-3">283</p>
									<p className=" text-muted text-uppercase">
										happy
										<br />
										clients
									</p>
								</div>
							</Col>
						</Row>
					</Col>
					<Col xs={{ order: 'first' }}>
						<img className="img-fluid banner-img" src={aboutImage} alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
