//import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Reunion from './component/Reunion';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Profile from './component/Profile'

function App() {
	return (
		<>
			
			<div className="vh-100">
			<NavBar /> 
				<Switch>
					{/*	<Route path="/products/:id" component={ProductDetails} />
								<Route path="/product/:category" component={ProductCategory} />
								<Route path="/products" component={Products} />
								<Route path="/cart/:id?" component={Cart} />
								<Route path="/login" component={LoginForm} />
								<Route path="/logout" component={Logout} />
								<Route path="/register" component={Register} />
								<Route path="/checkout" component={Checkout} />
								<Route path="/addproduct" component={AddProduct} />*/}
								<Route path="/profile" component={Profile} /> 
							 <Route path="/reunion" component={Reunion} />

					<Route path="/" component={Home} />
				</Switch>
				<Footer />
			</div>
			
			
		</>
	);
}

export default App;
