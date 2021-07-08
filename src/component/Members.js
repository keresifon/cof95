import React, { useState, useEffect , useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import _ from 'lodash';
import { UserContext } from '../context/Context';

import { getAccounts } from '../services/accountService';
Amplify.configure(awsconfig);


function Members(props) {
    	const [user] = useContext(UserContext);
        const [members, setMembers] = useState([]);

        	useEffect(() => {
		async function gAccount() {
			const data = await getAccounts();
			const members = [...data];
			setMembers(members);
		}
		gAccount();
	}, []);
console.log(members)


    return (
        <Layout>
        <div className ="container">
					<div class="row text-center gy-6 mt-6">
                                    {members.map(member => (
							<div class="col-md-6 col-lg-4">
								<div class="card">
									<div class="card-body">
										<img src={member.imgURL} className="w-15" alt="" />
										<h4 className="mb-1">{member.fullName}</h4>
									<div className="meta mb-2">{member.nickName}</div>
									<p className="mb-2">
										{member.email}
										<br />
										{member.phone}
									</p>
									<nav className="nav social mb-0">
										<a href={member.twitter} target="_blank" rel="noopener noreferrer">
											<i className="uil uil-twitter"></i>
										</a>
										<a href={member.facebook} target="_blank" rel="noopener noreferrer">
											<i className="uil uil-facebook-f"></i>
										</a>
										
									</nav><Link to="#" class="more hover link-violet">Learn More</Link>
									</div>
									{/* <!--/.card-body --> */}
								</div>
								{/* <!--/.card --> */}
							</div>
                            ))}
							{/* <div class="col-md-6 col-lg-4">
								<div class="card bg-pale-aqua">
									<div class="card-body">
										<img src="src/img/icons/shield.svg" class="svg-inject icon-svg icon-svg-md text-aqua mb-4" alt="" />
										<h4>Secure Payments</h4>
										<p class="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
										<a href="#" class="more hover link-aqua">Learn More</a>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-4">
								<div class="card bg-pale-red">
									<div class="card-body">
										<img src="src/img/icons/cloud-computing-3.svg" class="svg-inject icon-svg icon-svg-md text-red mb-4" alt="" />
										<h4>Daily Updates</h4>
										<p class="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
										<a href="#" class="more hover link-red">Learn More</a>
									</div>
								</div>
							</div> */}
						</div>

        </div>
        </Layout>
    );
}

export default withAuthenticator(Members);