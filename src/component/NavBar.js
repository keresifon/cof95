import React , {useContext}from 'react';
import { Link } from 'react-router-dom';
//import logodark from '../component/img/logo-dark.png';
//import logolight from '../component/img/logo-light.png';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import '../../src/component/css/theme/aqua.css';
import { UserContext } from '../context/Context';
import { Navbar, Nav, NavDropdown,  } from 'react-bootstrap';





function NavBar(props) {
	const [user] = useContext(UserContext);
	return (
		
		< div className="container pt-2 pb-5">
			<Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/"><img
        src="https://res.cloudinary.com/kwesiblack/image/upload/c_scale,w_75/v1625871791/cof95/logo_j0josc.png"
       // width="30"
        //height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
	  {user && ( <Nav.Link as={Link} to="/profile">Profile</Nav.Link> )}
	  {user && (<Nav.Link as={Link} to="/finstatement">Accounts</Nav.Link> )}
	  {user && (<Nav.Link as={Link} to="/members">Members</Nav.Link>)}
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
	<Nav className="ml-auto">
	{user && (<AmplifySignOut /> )}
</Nav>
    
  </Navbar.Collapse>
</Navbar>
		</div>

		
	);
}

export default NavBar;
