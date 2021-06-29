import React, {useEffect, useState} from 'react';
import imgOne from '../component/img/photos/about2.jpg';
import imgTwo from '../component/img/photos/about3.jpg';
import icon from '../component/img/icons/megaphone.svg';
import awsconfig from '../aws-exports';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);


function Welcome(props) {
	const [user, setUser] = useState('');


	useEffect(() => {
		async function getUserInfo() {
			const cuser = await Auth.currentAuthenticatedUser();
			const user = cuser.attributes.sub;
			setUser(user);
		}
		getUserInfo();
	}, [user]);

	
	
	return (
		<div>
			<section className="wrapper bg-light angled upper-end lower-end">
				<div className="container py-14 py-md-16">
					<div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
						<div className="col-lg-6 position-relative order-lg-2">
							<div
								className="shape bg-dot primary rellax w-16 h-20"
								data-rellax-speed="1"
								style={{ top: 3, left: 5.5 }}
							></div>
							<div className="overlap-grid overlap-grid-2">
								<div className="item">
									<figure className="rounded shadow">
										<img src={imgOne} srcSet="src/img/photos/about2@2x.jpg 2x" alt="" />
									</figure>
								</div>
								<div className="item">
									<figure className="rounded shadow">
										<img src={imgTwo} srcSet="src/img/photos/about3@2x.jpg 2x" alt="" />
									</figure>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<img src={icon} className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
							<h2 className="display-4 mb-3">Welcome</h2>
							<p className="lead fs-lg">
								Thank you for signing up. Your account will be activated shortly to enable you update
								your profile
							</p>
							<p className="mb-6">Enjoy the Anthem </p>
							<div className="row gy-3 gx-xl-8">
								<div className="col-xl-6">
									<ul className="icon-list bullet-bg bullet-soft-primary mb-0">
										<li>
											<span>
												<i className="uil uil-check"></i>
											</span>
											<span>
												F.G.C.E we hail thee <br />
												Love and trust in thee we have
												<br />
												From all corners we come to thee
												<br />
												Greater tomorrow will it be
											</span>
										</li>
										<li className="mt-3">
											<span>
												<i className="uil uil-check"></i>
											</span>
											<span>
												Many potentials we have
												<br />
												We grow to serve our nation
												<br />
												Boys and girls in unity serve
												<br />
												For freedom through education
											</span>
										</li>
										<li className="mt-3">
											<span>
												<i className="uil uil-check"></i>
											</span>
											<span>
												Guide O Lord our noble course
												<br />
												Our teachers the truth to know
												<br />
												In love and honesty to grow
												<br />
												Pro unitate F.G.C.E
											</span>
										</li>
									</ul>
								</div>
								{/* <div className="col-xl-6">
									<ul className="icon-list bullet-bg bullet-soft-primary mb-0">
										<li>
											<span>
												<i className="uil uil-check"></i>
											</span>
											<span>Etiam porta sem malesuada magna mollis euismod.</span>
										</li>
										<li className="mt-3">
											<span>
												<i className="uil uil-check"></i>
											</span>
											<span>Fermentum massa vivamus faucibus amet euismod.</span>
										</li>
									</ul>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default withAuthenticator(Welcome);
