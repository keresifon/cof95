import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/component/css/theme/navy.css';
import bgimage from '../component/img/photos/bg11.jpg'
function Home(props) {
	return (
		<div>
					<section className="wrapper bg-gray">
			<div className="container pt-12 pt-md-16 text-center">
				<div className="row">
					<div className="col-lg-8 col-xxl-7 mx-auto text-center" data-cues="slideInDown" data-group="page-title" data-delay="600">
						<h2 className="fs-16 text-uppercase ls-xl text-dark mb-4">"Boys and girls in unity serve"</h2>
						<h1 className="display-1 fs-58 mb-7">FGCE Class of 95</h1>
						<div className="d-flex justify-content-center" data-cues="slideInDown" data-group="page-title-buttons" data-delay="900">
							<span><Link to="/profile" className="btn btn-lg btn-primary rounded-pill me-2">Login</Link></span>
							<span><Link to="/" className="btn btn-lg btn-outline-primary rounded-pill">Contact Us</Link></span>
						</div>
					</div>
					{/* <!--/column --> */}
				</div>
				{/* <!-- /.row --> */}
			</div>
			{/* <!-- /.container --> */}
			<figure className="position-absoute"  style={{bottom:0, left: 0, zIndex:4}}><img src={bgimage} alt="" /></figure> 
		</section>
		<section className="wrapper bg-gray">
  </section>
  		</div>
	);
}

export default Home;
