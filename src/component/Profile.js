import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
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
	const [groups, setGroups] = useState('');
	const [members, setMembers] = useState([]);
	//const [isMember, setIsMember] = useState();

	useEffect(() => {
		async function getUserInfo() {
			const cuser = await Auth.currentAuthenticatedUser();
			const user = cuser.attributes.sub;
			setUser(user);
		}
		getUserInfo();
	}, []);

	useEffect(() => {
		async function getUserGroup() {
			const cuser = await Auth.currentAuthenticatedUser();
			const groups = cuser.signInUserSession.accessToken.payload['cognito:groups'];
			setGroups(groups);
		}
		getUserGroup();
	}, []);
   
	useEffect(() => {
		async function gAccount() {
			const data = await getAccounts();
			const members = [...data];
			setMembers(members);
		}
		gAccount();
	}, []);

	// let iMember = _.includes(groups, 'member');

	// let memb = _.head(groups);
	// let membn = _.toString(memb);
	// if (membn === 'member') {
	// 	console.log("It's equal");

	// } else {
	// 			return <Redirect to='/reunion' />;
	// }



	
	// console.log('State', iMember);
	// console.log('Extract', memb);
	// console.log('String', membn);
	// console.log('Group', groups);

	// useEffect(() => {
	// 	async function getMember(){
	// 	const iMember = _.includes(groups, 'member');
	// 	setIsMember(iMember)
	// 	console.log("State",isMember)
	// }
	// getMember();
	// }, []);

	// if (groups.includes('member') ){
	// return console.log ("A member")
	// }
	// else {
	// 	return console.log("Not a Member" )
	// }
	//console.log(groups);

	//  if (isMember === false) {
	// 	return <Redirect to='/reunion' />;
	// }
	//console.log(isMember);

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
				<Row>
					<Col>
						<div>
							<Link to="uprofile">[Update Profile]</Link>
						</div>
					</Col>
				</Row>
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
