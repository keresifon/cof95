import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import { FaShoppingCart } from 'react-icons/fa';
//import { CartContext } from '../context/Context';
//import { CartContext , UserContext } from '../context/Context';
import { AmplifySignOut } from '@aws-amplify/ui-react';
function NavBar(props) {
	return (
		<div>
			{' '}
			<header class="wrapper bg-gray">
				<nav class="navbar fancy navbar-expand-lg navbar-light caret-none navbar-bg-light">
					<div class="container">
						<div class="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
							<div class="navbar-brand w-100">
								<a href="index.html">
									<img src="src/img/logo-dark.png" srcset="src/img/logo-dark@2x.png 2x" alt="" />
								</a>
							</div>
							<div class="navbar-collapse offcanvas-nav d-lg-flex mx-lg-auto">
								<div class="offcanvas-header d-lg-none d-xl-none">
									<a href="index.html">
										<img
											src="src/img/logo-light.png"
											srcset="src/img/logo-light@2x.png 2x"
											alt=""
										/>
									</a>
									<button
										type="button"
										class="btn-close btn-close-white offcanvas-close offcanvas-nav-close"
										aria-label="Close"
									></button>
								</div>
								<ul class="navbar-nav">
									<li class="nav-item">
										<Link to="/" class="nav-link">
											Home
										</Link>
									</li>
									<li class="nav-item">
										<Link to="/welcome" class="nav-link">
											Landing
										</Link>
									</li>
									<li class="nav-item">
										<Link to="/profile" class="nav-link">
											Profile
										</Link>
									</li>
									
								</ul>
								{/* <!-- /.navbar-nav --> */}
							</div>
							{/* <!-- /.navbar-collapse --> */}
							<div class="navbar-other w-100 d-flex ms-auto">
								<ul class="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
								<li class="nav-item">
										<AmplifySignOut />
									</li>
									<li class="nav-item d-lg-none">
										<div class="navbar-hamburger">
											<button class="hamburger animate plain" data-toggle="offcanvas-nav">
												<span></span>
											</button>
										</div>
									</li>
								</ul>
								{/* <!-- /.navbar-nav --> */}
							</div>
							{/* <!-- /.navbar-other --> */}
						</div>
						{/* <!-- /.navbar-collapse-wrapper --> */}
					</div>
					{/* <!-- /.container --> */}
				</nav>
				{/* <!-- /.navbar --> */}
			</header>
		</div>
	);
}

export default NavBar;
