import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import authorizationAuthenticationImg from '../../assets/images/Authorization-and-Authentication.png';
import firebase from '../../assets/images/firebase.png';

const Blog = () => {
	return (
		<Container>
			<div className="card generic-bg-color">
				<Row className="g-0 justify-content-center align-items-center">
					<div className="col-md-4">
						<img
							src={authorizationAuthenticationImg}
							className="card-img"
							alt=""
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<Row xs={1} md={2} lg={2}>
								<Col>
									<h4 className="text-center">Authentication</h4>
									<ul className="text-muted text-align-justify">
										<li>
											Authentication confirms your identity to grant access to
											the system..
										</li>
										<li>
											It is the process of validating user credentials to gain
											user access.
										</li>
										<li>It determines whether user is what he claims to be.</li>
										<li>
											Authentication usually requires a username and a password.
										</li>
										<li>
											Authentication is the first step of authorization so
											always comes first.
										</li>
										<li>
											For example, students of a particular university are
											required to authenticate themselves before accessing the
											student link of the university’s official website. This is
											called authentication.
										</li>
									</ul>
								</Col>
								<Col>
									<h4 className="text-center">Authorization</h4>
									<ul className="text-muted text-align-justify">
										<li>
											Authorization determines whether you are authorized to
											access the resources.
										</li>
										<li>
											It is the process of verifying whether access is allowed
											or not.
										</li>
										<li>It determines what user can and cannot access.</li>
										<li>
											Authentication factors required for authorization may
											vary, depending on the security level.
										</li>
										<li>
											Authorization is done after successful authentication.
										</li>
										<li>
											For example, authorization determines exactly what
											information the students are authorized to access on the
											university website after successful authentication.
										</li>
									</ul>
								</Col>
							</Row>
						</div>
					</div>
				</Row>
				<Row className="g-0 justify-content-center align-items-center">
					<div className="col-md-4">
						<img src={firebase} className="card-img pe-5" alt="" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h4 className="text-center">Firebase</h4>
							<p className="text-muted text-align-justify">
								Firebase is a Backend-as-a-Service (Baas). It provides
								developers with a variety of tools and services to help them
								develop quality apps, grow their user base, and earn profit. It
								is built on Google’s infrastructure. Firebase is categorized as
								a NoSQL database program, which stores data in JSON-like
								documents.
							</p>
							<h5 className="text-start">Key Features</h5>

							<ul className="text-muted text-align-justify">
								<li>Authentication</li>
								<li>Realtime database</li>
								<li>Hosting</li>
								<li>Test lab</li>
								<li>Notifications</li>
							</ul>
						</div>
					</div>
				</Row>
			</div>
		</Container>
	);
};

export default Blog;
