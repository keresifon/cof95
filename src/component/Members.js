import React, { useState, useEffect , useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
//import _ from 'lodash';
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



    return (
        <Layout>
        <div className ="container">
		<div className="col ml-auto">
							<h2 className="display-5 mb-7">Directory</h2>
						</div>
						
					<div class="row text-center gy-6 mt-6">
                                    {members.map(member => (
							<div class="col-md-6 col-lg-4">
								<div class="card">
									<div class="card-body">
										<img src={member.imgURL} className="w-15" alt="" />
										<h4 className="mb-1">{member.fullname}</h4>
									<div className="meta mb-2">{member.nickname}</div>
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
								</div>
							</div>
                            ))}
							
						</div>

        </div>
        </Layout>
    );
}

export default withAuthenticator(Members);