import React , {useContext}from 'react';
import { Link } from 'react-router-dom';
import logodark from '../component/img/logo-dark.png';
import logolight from '../component/img/logo-light.png';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import '../../src/component/css/theme/navy.css';
import { UserContext } from '../context/Context';





function NavBar(props) {
	const [user] = useContext(UserContext);
	return (
		<div>
			{' '}
			<header className="wrapper bg-gray">
				<nav className="navbar fancy navbar-expand-lg navbar-light caret-none navbar-bg-light">
					<div className="container">
						<div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
							<div className="navbar-brand w-100">
								<Link to="/">
									<img src={logodark} srcSet="src/img/logo-dark@2x.png 2x" alt="" />
								</Link>
							</div>
							<div className=" offcanvas-nav d-lg-flex mx-lg-auto">
								<div className="offcanvas-header d-lg-none d-xl-none">
									<Link to="/">
										<img src={logolight} srcSet="src/img/logo-light@2x.png 2x" alt="" />
									</Link>
									<button
										type="button"
										className="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
										aria-label="Close"
									></button>
								</div>
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link to="/" className="nav-link">
											Home
										</Link>
									</li>
									{user && (
								 <li className="nav-item">
										<Link to="/profile" className="nav-link">
											Profile
										</Link>
									</li> 
									)}
								
								{user && (
								   <li className="nav-item">
										<Link to="/finstatement" className="nav-link">
											Accounts
										</Link>
									</li> 
								)}
								 	{user && (
									<li className="nav-item">
										<Link to="/members" className="nav-link">
											Members
										</Link>
									</li> 
									)}
								</ul>
							</div>
							<div className="navbar-other w-100 d-flex ms-auto">
								<ul className="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
								{user && (
									<li className="nav-item">
										<AmplifySignOut />
									</li>
								)}
									<li className="nav-item d-lg-none">
										<div className="navbar-hamburger">
											<button className="hamburger animate plain" data-toggle="offcanvas-nav">
												<span></span>
											</button>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default NavBar;
