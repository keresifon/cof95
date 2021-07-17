import React , {useContext}from 'react';
import { Link } from 'react-router-dom';
//import { AmplifySignOut } from '@aws-amplify/ui-react';
import SignOut from './SignOut';
import { UserContext } from '../context/Context';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';





function NavBar(props) {
	const [user] = useContext(UserContext);
	return (
		
		< div className="container pt-5 pb-5">
			<Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/"><img
        src="https://res.cloudinary.com/kwesiblack/image/upload/c_scale,w_75/v1625871791/cof95/logo_j0josc.png"
       
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
	  {user && ( <Nav.Link as={Link} to="/profile">Profile</Nav.Link> )}
	  {user && (<Nav.Link as={Link} to="/finstatement">Accounts</Nav.Link> )}
	  {user && (<Nav.Link as={Link} to="/members">Members</Nav.Link>)}
    {/* <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link> */}
      <NavDropdown title="Category" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/category/Profile">Profile</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/News">News</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/Opinion">Opinion</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown> 
    </Nav>
	<Nav className="ml-auto">
	{user && (<SignOut /> )}
</Nav>
    
  </Navbar.Collapse>
</Navbar>
		</div>

		
	);
}

export default NavBar;
