import { API } from 'aws-amplify';

export function getAccounts() {
	return API.get('accounts', '/accounts/id');
}

	

export function saveAccount(user, fullName, nickName, phone, address, bio) {
	const myInit = {
		// OPTIONAL
		body: {
			id: user.sub,
			email: user.email,
			fullname: fullName,
			nickname: nickName,
			phone: phone,
			address: address,
			bio: bio,
		},
	};

	return  API.put('accounts', '/accounts', myInit);
}