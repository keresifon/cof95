import React from 'react';
import Layout from './Layout';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Container, Row, Col, Card  } from 'react-bootstrap';

Amplify.configure(awsconfig);

function Profile(props) {
	return (
		<Layout>
			<Container className="py-3">
				<Row>
					<Col sm={3}>
						<Card className="h-100">
							<Card.Img
								variant="top"
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1621029235/cof95/IMG_3846_iyxafe.jpg"
							/>
							<Card.Body>
								<Card.Text>NickName: Etong</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="h-100">
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted">About</Card.Subtitle>
								<Card.Text>
									Full Name: Keresifon Ekpenyong <br />
									Email: keresifon@gmail.com
									<br />
									Phone: +2348125527463
									<br />
									Mobile:+2348125527463
									<br />
									Address: Tulip 3 Freedom Heights
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="h-100">
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted">Bio</Card.Subtitle>
								<Card.Text>
									A Software Engineer with 18+ years' experience building web applications. Full Stack
									developer Led the design of the flagship educational product for Socketworks
									Limited. Joined as a web developer and over the years, rose to lead the company's
									technology team! A father of three adorable girls.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
//export default Profile;
export default withAuthenticator(Profile);