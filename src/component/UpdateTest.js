import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//import { Redirect } from 'react-router-dom';
//import Layout from './Layout';
import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
//import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import _ from 'lodash';
import { saveData } from '../services/accountService';
import { getAccounts } from '../services/accountService';

Amplify.configure(awsconfig);

function UpdateTest(props) {
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

	//const onSubmit = (data) => console.log(data);

	const onSubmit = (data) => {
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

		//console.log("Body", myInit)
		API.put('users', '/users', myInit);
		props.history.push('/profile');
	};

	//console.log(member.fullname)
	//console.log ('Props:', props.match.params.id)
	//console.log('FullName:', fullName);

	//console.log('member', reset);
	//console.log('user', user);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('fullname')} />
			<input {...register('nickname')} />
			<input {...register('phone')} />
			<input {...register('address')} />
			<input {...register('bio')} />

			<button type="submit">Submit</button>
		</form>
	);
}
export default withAuthenticator(UpdateTest);
