import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import _ from 'lodash';
import { saveAccount } from '../services/accountService';
import { getAccounts } from '../services/accountService';



Amplify.configure(awsconfig);

function ProfileUpdate(props) {
	const [user, setUser] = useState('');
	const [groups, setGroups] = useState('');
    //const [data, setData] = useState({fullName:'',nickName:'',phone:'',address: '',bio:''})
	const [member, setMember] = useState('');
	//const [ lastName, setLastName] = useState('');
	const [fullname, setFullName] = useState('');
	const [nickname, setNickName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [bio, setBio] = useState('');
	
	//const [members, setMembers] = useState({});
	//const [account, setAccount] = useState();

	useEffect(() => {
		async function getUserInfo() {
			const cuser = await Auth.currentAuthenticatedUser();
			const user = cuser.attributes;
			setUser(user);
		}
		getUserInfo();
	}, []);

	useEffect(() => {
		async function gAccount() {
			const data = await getAccounts();
			const members = [...data];
			const cmember = _.filter(members, function (mem) {
				return mem.id === user.sub;
			});
			const member =  Object.assign({}, ...cmember);
			setMember(member);
		}
		gAccount();
	}, [user.sub]);

	

	useEffect(() => {
		async function getUserGroup() {
			const cuser = await Auth.currentAuthenticatedUser();
			const groups = cuser.signInUserSession.accessToken.payload['cognito:groups'];
			setGroups(groups);
		}
		getUserGroup();
	}, []);

	if (groups === undefined) {
		return <Redirect to="/welcome" />;
	}

	async function putData() {

		return await saveAccount(user, fullname, nickname, phone, address, bio);
	}



	const handleSubmit = async(e) => {
		e.preventDefault();

		await putData();
		props.history.push('/profile');
	};


	// const member = _.filter(members, function (mem) {
	// 	return mem.id === user.sub;
	// });
	// // => objects for ['fred']
	
	
    
	// console.log(user)
	console.log("member", member)
	console.log(user)
    
	



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
											defaultValue={member.fullname}
											//value={fullName}
											placeholder=''
										onChange={(e) => setFullName(e.target.value)}
										/>
									</Col>

									<Col className="p-2">
										<Form.Control
											defaultValue={member.nickname}
											placeholder=''
											onChange={(e) => setNickName(e.target.value)}
										/>
									</Col>
									<Col className="p-2">
										<Form.Control
											defaultValue={member.phone}
											placeholder=''
											onChange={(e) => setPhone(e.target.value)}
										/>
									</Col>
									<Col className="p-2">
										<Form.Control
											as="textarea"
											defaultValue={member.address}
											//value={member.address}
											placeholder=''
											row={4}
											onChange={(e) =>setAddress(e.target.value)}
										/>
									</Col>
									<Col className="p-2">
									<Form.Control
										as="textarea"
										defaultValue={member.bio}
										placeholder=''
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

