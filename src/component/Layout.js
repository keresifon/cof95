import React from 'react';
//import NavBar from './NavBar';
//import Footer from './Footer';



function Layout(props) {
    return (
     
     <div  className="vh-100">
     
       <div >
       <div>&nbsp;</div>
       <div>{props.children}</div>
       </div>

     </div>
     
    
    );
}

export default Layout;