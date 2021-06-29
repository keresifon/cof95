import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//import { Redirect } from 'react-router-dom';
import Layout from './Layout';
import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import _ from 'lodash';
import { getAccounts } from '../services/accountService';

Amplify.configure(awsconfig);

function ProfileUpdate(props) {
	const [user, setUser] = useState('');
	const [groups, setGroups] = useState('');
	const [member, setMember] = useState('');
	const [fullname, setFullName] = useState('');
	const [nickname, setNickName] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [bio, setBio] = useState('');
	const [email, SetEmail] = useState('');
	const [id, SetId] = useState('');

	useEffect(() => {
		async function getUserInfo() {
			const cuser = await Auth.currentAuthenticatedUser();
			const user = cuser.attributes;
			setUser(user);
		}
		getUserInfo();
	}, []);
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			id: '',
			email: '',
			fullname: '',
			nickname: '',
			phone: '',
			address: '',
			bio: '',
		},
	});

	useEffect(() => {
		async function gAccount() {
			const data = await getAccounts();
			const members = [...data];
			const cmember = _.filter(members, function (mem) {
				return mem.id === user.sub;
			});
			const member = Object.assign({}, ...cmember);
			//setMember(member);
			reset(member);
		}
		gAccount();
	}, [user.sub, reset]);

	const onSubmit = async (data) => {
		//e.preventDefault();

		const myInit = {
			// OPTIONAL
			body: {
				id: user.sub,
				email: user.email,
				fullname: data.fullname,
				nickname: data.nickname,
				phone: data.phone,
				address: data.address,
				bio: data.bio,
			},
		};

		await API.put('users', '/users', myInit);

		props.history.push('/profile');
	};

	return (
		<Layout>
			<div className="container py-3">
				<div className="row">
					<div className="col-md-6 col-lg-4">
					<div className="card">
								<div className="card-body">
									<img
										className="rounded-circle w-15 mb-4"
										src="https://res.cloudinary.com/kwesiblack/image/upload/c_fill,g_face,h_150,r_max,w_150/v1621029235/cof95/IMG_3846_iyxafe.jpg"
										//srcSet="src/img/avatars/te3@2x.jpg 2x"
										alt=""
									/>
							</div></div>
					</div>
					<div className="col-md-6 col-lg-4">
						<form class="contact-form" onSubmit={handleSubmit(onSubmit)}>
							<div>
								<div className="col p-2">
									<input
										type="text"
										name="fullname"
										className="form-control"
										{...register('fullname')}
									/>
								</div>
							</div>
							<div>
								<div className="col p-2">
									<input type="text" className="form-control" {...register('nickname')} />
								</div>
							</div>
							<div>
								<div className="col p-2">
									<input type="text" className="form-control" {...register('phone')} />
								</div>
							</div>
							<div>
								<div className="col p-2">
									<textarea type="textarea" className="form-control" {...register('address')} />
								</div>
							</div>
							<div>
								<div className="col p-2">
									<textarea type="text-area" className="form-control" {...register('bio')} />
								</div>
							</div>
							<div>
								<div className="col p-2">
									<Button type="submit" variant="outline-secondary">
										Submit
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}
export default withAuthenticator(ProfileUpdate);
