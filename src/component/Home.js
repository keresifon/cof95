import React from 'react';
//import { Alert } from 'react-bootstrap';
//import ReactTextRotator from 'react-text-rotator';
//import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaAws, FaLinkedin } from 'react-icons/fa';
//import Content from '../component/Content';
import { Animated } from 'react-animated-css';
//import Footer from './Footer';
//import NavBar from './NavBar';

function Home(props) {
	return (
		<>
			
			{/* <NavBar /> */}
				<div className="container-fluid bg ">
				
					<div className="row">
						<div className="col py-5">
							<Animated
								animationIn="flash"
								animationOut="fadeOut"
								animationInDuration={3000}
								isVisible={true}
							></Animated>

							<Animated
								animationIn="fadeIn"
								animationOut="fadeOut"
								animationInDuration={3000}
								isVisible={true}
							>
								<div className="container">
									<div className="h6  introColor">

									</div>

									{/* <div>
								<ReactTextRotator content={content} time={5000} startDelay={2000} />
							</div> */}
								</div>
							</Animated>
						</div>
					</div>
					<div className="row">
						<div className="col py-5">
							<Animated
								animationIn="flash"
								animationOut="fadeOut"
								animationInDuration={3000}
								isVisible={true}
							></Animated>

							<Animated
								animationIn="fadeIn"
								animationOut="fadeOut"
								animationInDuration={3000}
								isVisible={true}
							>
								<div className="container bg-secondary p-3">
									<div className="h6  introRed">
										<p>
											F-G-C-E we hail thee <br />
											Love and trust in thee we have
											<br />
											From all corners we come to thee
											<br />
											Greater tomorrow will it be
											<br />
										</p>

										<p>
											Many potentials we have
											<br />
											We grow to serve the nation
											<br />
											Boys and girls in unity serve
											<br />
											For freedom through education
											<br />
										</p>

										<p>
											Guide Oh Lord our noble cause
											<br />
											Our teachers the truth to know
											<br />
											In love and honesty to grow
											<br />
											Pro Unitate, F-G-C-E.
											<br />
										</p>
									</div>

									{/* <div>
								<ReactTextRotator content={content} time={5000} startDelay={2000} />
							</div> */}
								</div>
							</Animated>
						</div>
					</div>
					{/* <Footer /> */}

				</div>
			
		</>
	);
}

export default Home;
