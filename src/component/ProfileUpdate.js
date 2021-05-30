import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
//import _ from 'lodash';
import { saveAccount } from '../services/accountService';

Amplify.configure(awsconfig);

function ProfileUpdate(props) {
	const [user, setUser] = useState('');
	
	//const [member, setMember] = useState('');
	//const [ lastName, setLastName] = useState('');
	const [fullName, setFullName] = useState('');
	const [nickName, setNickName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [bio, setBio] = useState('');
	
	//const [members, setMembers] = useState([]);
	//const [account, setAccount] = useState();

	useEffect(() => {
		async function getUserInfo() {
			const cuser = await Auth.currentAuthenticatedUser();
			const user = cuser.attributes;
			setUser(user);
		}
		getUserInfo();
	}, []);


	async function putData() {

		return await saveAccount(user, fullName, nickName, phone, address, bio);
	}



	const handleSubmit = async(e) => {
		e.preventDefault();

		await putData();
		props.history.push('/');
	};

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
						<div>
							<Form onSubmit={handleSubmit}>
								<Form.Row>
									<Col className="p-2">
										<Form.Control
											value={fullName}
											placeholder="FullName"
											onChange={(e) => setFullName(e.target.value)}
										/>
									</Col>

									<Col className="p-2">
										<Form.Control
											value={nickName}
											placeholder="Nickname"
											onChange={(e) => setNickName(e.target.value)}
										/>
									</Col>
									<Col className="p-2">
										<Form.Control
											value={phone}
											placeholder="Mobile Phone"
											onChange={(e) => setPhone(e.target.value)}
										/>
									</Col>
									<Col className="p-2">
										<Form.Control
											as="textarea"
											value={address}
											placeholder="Address"
											row={4}
											onChange={(e) => setAddress(e.target.value)}
										/>
									</Col>
									<Col className="p-2">
									<Form.Control
										as="textarea"
										value={bio}
										placeholder="Bio..."
										row={4}
										onChange={(e) => setBio(e.target.value)}
									/>
								</Col>
									<Col className="p-2">
										<Button variant="outline-secondary" type="submit">
											Submit
										</Button>
									</Col>
								</Form.Row>
							</Form>
						</div>
					</Col>
					
				</Row>
			</Container>
		</Layout>
	);
}
//export default Profile;
export default withAuthenticator(ProfileUpdate);

