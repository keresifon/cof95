//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Welcome from './component/Welcome';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Profile from './component/Profile';
import ProfileUpdate from './component/ProfileUpdate';
import { ImgUpProvider , UserProvider } from './context/Context';
import Members from './component/Members'
import AccSatement from './component/content/AccSatement'
import Gallery from './component/content/Gallery';


function App() {
	const [imageUrl, setImageUrl] = useState('')
    const [user , setUser] = useState('')
	return (
		<>
			<div className="vh-100">
			<ImgUpProvider value = { [imageUrl, setImageUrl]}>
			<UserProvider value = {[user, setUser]}>
				<NavBar />
				<Switch>
					{/*	<Route path="/products/:id" component={ProductDetails} />
								<Route path="/product/:category" component={ProductCategory} />
								<Route path="/products" component={Products} />
								<Route path="/cart/:id?" component={Cart} />
								<Route path="/login" component={LoginForm} />
								<Route path="/logout" component={Logout} />*/}
								<Route path="/gallery" component={Gallery} />
								<Route path="/finstatement" component={AccSatement} />
								<Route path="/members" component={Members} />
					<Route path="/uprofile" component={ProfileUpdate} />
					<Route path="/profile" component={Profile} />
					<Route path="/welcome" component={Welcome} />
					<Route path="/" component={Home} />
				</Switch>
				<Footer />
				</UserProvider>
				</ImgUpProvider>
			</div>
		</>
	);
}

export default App;
