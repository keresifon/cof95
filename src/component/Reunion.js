import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
//import _ from 'lodash';
//import { Link, Redirect } from 'react-router-dom';

Amplify.configure(awsconfig);

function Reunion(props) {
	//const [user, setUser] = useState('');
	//const [member, setMember] = useState('');
	//const [ lastName, setLastName] = useState('');
	const [groups, setGroups] = useState('');
	//const [members, setMembers] = useState([]);
	//const [isMember, setIsMember] = useState();

	useEffect(() => {
		async function getUserGroup() {
			const cuser = await Auth.currentAuthenticatedUser();
			const groups = cuser.signInUserSession.accessToken.payload['cognito:groups'];
			setGroups(groups);
		}
		getUserGroup();
	}, []);

	// let iMember = _.includes(groups, 'member');
	// let memb = _.head(groups);
	// let membn = _.toString(memb);
	// if (membn === 'member') {
	// 	return <Redirect to="/profile" />;
	// } else {
	// 	return <Redirect to="/" />;
	// }

	return (
		<Layout>
			<div>
				<div className="container"></div>
				<div>
					<h1>This is a reunion page</h1>
				</div>
			</div>
		</Layout>
	);
}

export default withAuthenticator(Reunion);
