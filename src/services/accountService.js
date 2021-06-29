import { API } from 'aws-amplify';

export function getAccounts() {
	//return API.get('accounts', '/accounts/id');
	return API.get('users', '/users/id');
}

	

export function saveAccount(user, fullname, nickname, phone, address, bio) {
	const myInit = {
		// OPTIONAL
		body: {
			id: user.sub,
			email: user.email,
			fullname: fullname,
			nickname: nickname,
			phone: phone,
			address: address,
			bio: bio,
		
		},
	};

	

	//return  API.put('accounts', '/accounts', myInit);
	return  API.put('users', '/users', myInit);
}

export function saveData(id, email,fullname, nickname, phone, address, bio) {
	const myInit = {
		// OPTIONAL
		body: {
			id: id,
			email: email,
			fullname: fullname,
			nickname: nickname,
			phone: phone,
			address: address,
			bio: bio,
		
		},
	};

	

	//return  API.put('accounts', '/accounts', myInit);
	return  API.put('users', '/users', myInit);
}