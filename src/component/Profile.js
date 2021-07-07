import React, { useState, useEffect, useContext} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import _ from 'lodash';
import { UserContext } from '../context/Context';
import { getAccounts } from '../services/accountService';
Amplify.configure(awsconfig);

function Profile(props) {
	const [user, setUser] = useContext(UserContext);
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
	}, [setUser]);

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

	if (groups === undefined) {
		return <Redirect to="/welcome" />;
	}

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
	let twitter = _.map(member, 'twitter');
	let facebook = _.map(member, 'facebook');
	let image = _.map(member, 'imgURL');



	return (
		<Layout>
			<div className="container">
				<section id="team" className="wrapper pt-3 pb-2">
					<div className="row">
						<div className="col ml-auto">
							<h2 className="display-5 mb-7">Your Profile</h2>
						</div>
						<div className="col">
							<ul className="nav nav-tabs nav-pills">
								<li className="nav-item">
									{' '}
									<Link className="nav-link" data-bs-toggle="tab" to="uprofile">
										<i className="uil uil-laptop-cloud pe-1"></i>
										<span>Update Profile</span>
									</Link>{' '}
								</li>
							</ul>
						</div>
					</div>
					<div className="row grid-view gy-6">
						<div className="col-md-6 col-lg-4">
							<div className="card">
								<div className="card-body">
									<img
										className="rounded-circle  mb-4"
										src={image}
										//srcSet="src/img/avatars/te3@2x.jpg 2x"
										alt=""
									/>
									<h4 className="mb-1">{fullName}</h4>
									<div className="meta mb-2">{nickName}</div>
									<p className="mb-2">
										{email}
										<br />
										{phone}
									</p>
									<nav className="nav social mb-0">
										<a href={twitter} target="_blank" rel="noopener noreferrer">
											<i className="uil uil-twitter"></i>
										</a>
										<a href={facebook} target="_blank" rel="noopener noreferrer">
											<i className="uil uil-facebook-f"></i>
										</a>
										
									</nav>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 ">
							<div className="card">
								<div className="card-body">
									<h4 className="mb-1">Bio</h4>

									<p className="mb-2">
										{bio}
										<br />
									</p>
								</div>
							</div>
							<div className="p-2"></div>
							<div className="card ">
								<div className="card-body">
									<h4 className="mb-1">Address</h4>

									<p className="mb-2">
										{address}
										<br />
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}
//export default Profile;
export default withAuthenticator(Profile);
