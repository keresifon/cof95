import React from 'react';
import { Navbar, Nav  } from 'react-bootstrap';



function Footer(props) {
  return (
   < div   >
    <Navbar bg="dark" variant="dark"   className="footer"  fixed="bottom">
    <Nav className="mr-auto">
    <Nav.Link>cof95.org</Nav.Link>
    </Nav>
    
    
    
  </Navbar>

  </div>
  );
}

export default Footer;
