import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import { FaShoppingCart } from 'react-icons/fa';
//import { CartContext } from '../context/Context';
//import { CartContext , UserContext } from '../context/Context';
import { AmplifySignOut } from '@aws-amplify/ui-react';
function NavBar(props) {
	return (
		<Container fluid>
			<Navbar className="bg-mongoose-ecom border-bottom border-secondary ">
				{/* <Button className = "harmburger">&#9776;</Button> */}
				<Navbar.Brand className="display-1">ClassOf95</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<div className="container">
						<Nav className="mr-auto ">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/profile">
								Profile
							</Nav.Link>
						
						</Nav>
					</div>
					<div className="container mr-right">
						<Nav className="mr-right">
							<AmplifySignOut /> 
						</Nav>
					</div>
					{/* <div>
					<Form inline>
						
						<FormControl type="text" placeholder="Search" className="mr-sm-1" />
						<Button variant="outline-light" className="mb-2" >Search</Button>
					</Form>
					</div> */}
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}

export default NavBar;
