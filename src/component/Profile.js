import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import _ from 'lodash';

import { getAccounts } from '../services/accountService';
Amplify.configure(awsconfig);

function Profile(props) {
	const [user, setUser] = useState('');
	//const [member, setMember] = useState('');
	//const [ lastName, setLastName] = useState('');
	const [groups, setGroups]  = useState('');
	const [members, setMembers] = useState([]);

	useEffect(() => {
		async function getUserInfo() {
			const cuser = await Auth.currentAuthenticatedUser();
			const groups = cuser.signInUserSession.accessToken.payload["cognito:groups"];
            setGroups(groups);
			const user = cuser.attributes.sub;
			setUser(user);
		}
		getUserInfo();
	}, []);
	
	useEffect(() => {
		async function gAccount() {
			const data = await getAccounts();
			const members = [...data];
			setMembers(members);
		}
		gAccount();
	}, []);


//    const test = () =>  groups.includes('member') ? 'Yes' : 'No'; 
//    console.log(test(true));
//    console.log(test(false));

	const member = _.filter(members, function (mem) {
		return mem.id === user;
	});
	// => objects for ['fred']
	let email = _.map(member, 'email');
	let fullName = _.map(member, 'fullname');
	let phone = _.map(member, 'phone');
	let bio = _.map(member, 'bio');
	let nickName = _.map(member, 'nickname');
	let address = _.map(member, 'address');

	return (
		<Layout>
			<Container className="py-3">
				<Row><Col><div><Link to="uprofile">[Update Profile]</Link></div></Col></Row>
				<Row>

					<Col sm={3}>
						<Card className="h-100">
							<Card.Img
								variant="top"
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1621029235/cof95/IMG_3846_iyxafe.jpg"
							/>
							<Card.Body>
								<Card.Text>NickName: {nickName}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="h-100">
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted">About</Card.Subtitle>
								<Card.Text>
									Full Name: {fullName} <br />
									Email: {email}
									<br />
									Phone: {phone}
									<br />
									Address: {address}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="h-100">
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted">Bio</Card.Subtitle>
								<Card.Text>{bio} </Card.Text>
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
