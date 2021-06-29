import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

function Reunion(props) {

	const [groups, setGroups] = useState('');


	useEffect(() => {
		async function getUserGroup() {
			const cuser = await Auth.currentAuthenticatedUser();
			const groups = cuser.signInUserSession.accessToken.payload['cognito:groups'];
			setGroups(groups);
		}
		getUserGroup();
	}, []);



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
