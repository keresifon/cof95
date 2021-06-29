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
  <section className="wrapper bg-gray">
			<div className="container">
				<div className="card shadow-none my-n15 my-lg-n17">
					<div className="card-body py-12 py-lg-14 px-lg-11 py-xl-16 px-xl-13">
						<div className="row text-center">
							<div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
								<h2 className="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
								<h3 className="display-4 mb-9">The service we offer is specifically designed to meet your needs.</h3>
							</div>
							{/* <!-- /column --> */}
						</div>
						{/* <!-- /.row --> */}
						<div className="row gx-md-8 gx-xl-12 gy-8 mb-14 mb-md-16 text-center">
							<div className="col-md-4">
								<div className="icon btn btn-block btn-lg btn-soft-purple disabled mb-5"> <i className="uil uil-phone-volume"></i> </div>
								<h4>24/7 Support</h4>
								<p className="mb-3">Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.</p>
								<Link to="#" className="more hover link-purple">Learn More</Link>
							</div>
							{/* <!--/column --> */}
							<div className="col-md-4">
								<div className="icon btn btn-block btn-lg btn-soft-green disabled mb-5"> <i className="uil uil-shield-exclamation"></i> </div>
								<h4>Secure Payments</h4>
								<p className="mb-3">Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.</p>
								<Link to="#" className="more hover link-green">Learn More</Link>
							</div>
							{/* <!--/column --> */}
							<div className="col-md-4">
								<div className="icon btn btn-block btn-lg btn-soft-orange disabled mb-5"> <i className="uil uil-laptop-cloud"></i> </div>
								<h4>Daily Updates</h4>
								<p className="mb-3">Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.</p>
								<Link to="#" className="more hover link-orange">Learn More</Link>
							</div>
							{/* <!--/column --> */}
						</div>
						{/* <!--/.row --> */}
						<div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
							<div className="col-lg-6">
								<h2 className="fs-15 text-uppercase text-muted mb-3">Our Strategy</h2>
								<h3 className="display-4 mb-5">3 working steps to organize our business projects.</h3>
								<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod eget. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus.</p>
								<p className="mb-6">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum consectetur.</p>
								<Link to="#" className="btn btn-primary rounded-pill mb-0">Learn More</Link>
							</div>
							{/* <!--/column --> */}
							<div className="col-lg-6">
								<div className="d-flex flex-row">
									<div>
										<span className="icon btn btn-block btn-lg btn-soft-purple disabled mt-1 me-5"><span className="number fs-22">01</span></span>
									</div>
									<div>
										<h4 className="mb-1">Collect Ideas</h4>
										<p className="mb-0">Nulla vitae elit libero pharetra augue dapibus. Fusce dapibus, tellus ac cursus commodo.</p>
									</div>
								</div>
								<div className="d-flex flex-row mt-8 ms-lg-10">
									<div>
										<span className="icon btn btn-block btn-lg btn-soft-green disabled mt-1 me-5"><span className="number fs-22">02</span></span>
									</div>
									<div>
										<h4 className="mb-1">Data Analysis</h4>
										<p className="mb-0">Vivamus sagittis lacus vel augue laoreet tortor mauris condimentum fermentum.</p>
									</div>
								</div>
								<div className="d-flex flex-row mt-8">
									<div>
										<span className="icon btn btn-block btn-lg btn-soft-orange disabled mt-1 me-5"><span className="number fs-22">03</span></span>
									</div>
									<div>
										<h4 className="mb-1">Finalize Product</h4>
										<p className="mb-0">Cras mattis consectetur purus sit amet massa justo sit amet risus consectetur magna elit.</p>
									</div>
								</div>
							</div>
							{/* <!--/column --> */}
						</div>
						{/* <!--/.row --> */}
						<hr className="my-14 my-md-16" />
						<div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11 align-items-end">
							<div className="col-lg-4">
								<h2 className="fs-15 text-uppercase text-muted mb-3">Company Facts</h2>
								<h3 className="display-4 mb-0">We are proud of our works</h3>
							</div>
							{/* <!-- /column --> */}
							<div className="col-lg-8 mt-lg-2">
								<div className="row align-items-center counter-wrapper gy-6 text-center">
									<div className="col-md-4">
										<h3 className="counter counter-lg">1000+</h3>
										<p>Completed Projects</p>
									</div>
									{/* <!--/column --> */}
									<div className="col-md-4">
										<h3 className="counter counter-lg">500+</h3>
										<p>Happy Clients</p>
									</div>
									{/* <!--/column --> */}
									<div className="col-md-4">
										<h3 className="counter counter-lg">150+</h3>
										<p>Awards Won</p>
									</div>
									{/* <!--/column --> */}
								</div>
								{/* <!--/.row --> */}
							</div>
							{/* <!-- /column --> */}
						</div>
						{/* <!-- /.row --> */}
						<div className="card bg-gray shadow-lg mb-14 mb-md-17">
							<div className="row gx-0">
								<div className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start" data-image-src="src/img/photos/tm1.jpg">
								</div>
								{/* <!--/column --> */}
								<div className="col-lg-6">
									<div className="p-10 p-xl-13">
										<div className="basic-slider owl-carousel gap-small" data-margin="30">
											<div className="item">
												<blockquote className="icon icon-top fs-lg text-center">
													<p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper.”</p>
													<div className="blockquote-details justify-content-center text-center">
														<div className="info ps-0">
															<h5 className="mb-1">Coriss Ambady</h5>
															<p className="mb-0">Financial Analyst</p>
														</div>
													</div>
												</blockquote>
											</div>
											{/* <!-- /.item --> */}
											<div className="item">
												<blockquote className="icon icon-top fs-lg text-center">
													<p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper.”</p>
													<div className="blockquote-details justify-content-center text-center">
														<div className="info ps-0">
															<h5 className="mb-1">Cory Zamora</h5>
															<p className="mb-0">Marketing Specialist</p>
														</div>
													</div>
												</blockquote>
											</div>
											{/* <!-- /.item --> */}
											<div className="item">
												<blockquote className="icon icon-top fs-lg text-center">
													<p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper.”</p>
													<div className="blockquote-details justify-content-center text-center">
														<div className="info ps-0">
															<h5 className="mb-1">Nikolas Brooten</h5>
															<p className="mb-0">Sales Manager</p>
														</div>
													</div>
												</blockquote>
											</div>
											{/* <!-- /.item --> */}
										</div>
										{/* <!-- /.owl-carousel --> */}
									</div>
									{/* <!--/div --> */}
								</div>
								{/* <!--/column --> */}
							</div>
							{/* <!--/.row --> */}
						</div>
						{/* <!-- /.card --> */}
						<div className="row text-center">
							<div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
								<h2 className="fs-15 text-uppercase text-muted mb-3">Case Studies</h2>
								<h3 className="display-4 mb-9">Check out some of our awesome projects with creative ideas and great design.</h3>
							</div>
							{/* <!-- /column --> */}
						</div>
						{/* <!-- /.row --> */}
						<div className="carousel owl-carousel blog grid-view mb-18" data-margin="30" data-dots="true" data-autoplay="false" data-autoplay-timeout="5000" data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "992":{"items": "2"}, "1200":{"items": "3"}}'>
							<div className="item">
								<article>
									<figure className="overlay overlay1 hover-scale rounded mb-6"><Link to="#"> <img src="src/img/photos/b4.jpg" alt="" /></Link>
										<figcaption>
											<h5 className="from-top mb-0">Read More</h5>
										</figcaption>
									</figure>
									<div className="post-header">
										<h2 className="post-title h3 mb-3"><Link className="link-dark" href="blog-post.html">Ligula tristique quis risus</Link></h2>
									</div>
									{/* <!-- /.post-header --> */}
									<div className="post-footer">
										<ul className="post-meta">
											<li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2021</span></li>
											<li className="post-comments"><Link to="#"><i className="uil uil-file-alt fs-15"></i>Coding</Link></li>
										</ul>
										{/* <!-- /.post-meta --> */}
									</div>
									{/* <!-- /.post-footer --> */}
								</article>
								{/* <!-- /article --> */}
							</div>
							{/* <!-- /.item --> */}
							<div className="item">
								<article>
									<figure className="overlay overlay1 hover-scale rounded mb-6"><Link to="#"> <img src="src/img/photos/b5.jpg" alt="" /></Link>
										<figcaption>
											<h5 className="from-top mb-0">Read More</h5>
										</figcaption>
									</figure>
									<div className="post-header">
										<h2 className="post-title h3 mb-3"><Link className="link-dark" href="blog-post.html">Nullam id dolor elit id nibh</Link></h2>
									</div>
									{/* <!-- /.post-header --> */}
									<div className="post-footer">
										<ul className="post-meta">
											<li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2021</span></li>
											<li className="post-comments"><Link to="#"><i className="uil uil-file-alt fs-15"></i>Workspace</Link></li>
										</ul>
										{/* <!-- /.post-meta --> */}
									</div>
									{/* <!-- /.post-footer --> */}
								</article>
								{/* <!-- /article --> */}
							</div>
							{/* <!-- /.item --> */}
							<div className="item">
								<article>
									<figure className="overlay overlay1 hover-scale rounded mb-6"><Link to="#"> <img src="src/img/photos/b6.jpg" alt="" /></Link>
										<figcaption>
											<h5 className="from-top mb-0">Read More</h5>
										</figcaption>
									</figure>
									<div className="post-header">
										<h2 className="post-title h3 mb-3"><Link className="link-dark" href="blog-post.html">Ultricies fusce porta elit</Link></h2>
									</div>
									{/* <!-- /.post-header --> */}
									<div className="post-footer">
										<ul className="post-meta">
											<li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2021</span></li>
											<li className="post-comments"><Link to="#"><i className="uil uil-file-alt fs-15"></i>Meeting</Link></li>
										</ul>
										{/* <!-- /.post-meta --> */}
									</div>
									{/* <!-- /.post-footer --> */}
								</article>
								{/* <!-- /article --> */}
							</div>
							{/* <!-- /.item --> */}
							<div className="item">
								<article>
									<figure className="overlay overlay1 hover-scale rounded mb-6"><Link to="#"> <img src="src/img/photos/b7.jpg" alt="" /></Link>
										<figcaption>
											<h5 className="from-top mb-0">Read More</h5>
										</figcaption>
									</figure>
									<div className="post-header">
										<h2 className="post-title h3 mb-3"><Link className="link-dark" href="blog-post.html">Morbi leo risus porta eget</Link></h2>
									</div>
									<div className="post-footer">
										<ul className="post-meta">
											<li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2021</span></li>
											<li className="post-comments"><Link to="#"><i className="uil uil-file-alt fs-15"></i>Business Tips</Link></li>
										</ul>
										{/* <!-- /.post-meta --> */}
									</div>
									{/* <!-- /.post-footer --> */}
								</article>
								{/* <!-- /article --> */}
							</div>
							{/* <!-- /.item --> */}
						</div>
						{/* <!-- /.owl-carousel --> */}
						<hr className="my-14 my-md-16" />
						<div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
							<div className="col-md-8 col-lg-6 order-lg-2">
								<figure className="rounded"><img src="src/img/photos/Linkbout24.jpg" srcset="src/img/photos/Linkbout24@2x.jpg 2x" alt=""/></figure>
							</div>
							{/* <!--/column --> */}
							<div className="col-lg-6">
								<h2 className="fs-15 text-uppercase text-muted mb-3">Our Team</h2>
								<h3 className="display-4 mb-5">Save your time by choosing our professional team.</h3>
								<p className="mb-6">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
								<div className="row gy-3 gx-xl-8">
									<div className="col-xl-6">
										<ul className="icon-list bullet-bg bullet-soft-primary mb-0">
											<li><span><i className="uil uil-check"></i></span><span>Aenean eu leo quam ornare curabitur blandit tempus.</span></li>
											<li className="mt-3"><span><i className="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare donec elit.</span></li>
										</ul>
									</div>
									{/* <!--/column --> */}
									<div className="col-xl-6">
										<ul className="icon-list bullet-bg bullet-soft-primary mb-0">
											<li><span><i className="uil uil-check"></i></span><span>Etiam porta sem malesuada magna mollis euismod.</span></li>
											<li className="mt-3"><span><i className="uil uil-check"></i></span><span>Fermentum massa vivamus faucibus amet euismod.</span></li>
										</ul>
									</div>
									{/* <!--/column --> */}
								</div>
								{/* <!--/.row --> */}
							</div>
							{/* <!--/column --> */}
						</div>
						{/* <!--/.row --> */}
						<div className="row gy-10 gx-8 gx-lg-12 mb-14 mb-md-16 align-items-center">
							<div className="col-md-8 col-lg-6">
								<figure className="rounded"><img src="src/img/photos/Linkbout25.jpg" srcset="src/img/photos/Linkbout25@2x.jpg 2x" alt=""/></figure>
							</div>
							{/* <!--/column --> */}
							<div className="col-lg-6">
								<h2 className="fs-15 text-uppercase text-muted mb-3">Why Choose Us?</h2>
								<h3 className="display-4 mb-7">A few reasons why our valued customers choose us.</h3>
								<div className="accordion accordion-wrapper" id="accordionExample">
									<div className="card plain accordion-item">
										<div className="card-header" id="headingOne">
											<button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Professional Design </button>
										</div>
										{/* <!--/.card-header --> */}
										<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div className="card-body">
												<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.</p>
											</div>
											{/* <!--/.card-body --> */}
										</div>
										{/* <!--/.accordion-collapse --> */}
									</div>
									{/* <!--/.accordion-item --> */}
									<div className="card plain accordion-item">
										<div className="card-header" id="headingTwo">
											<button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Top-Notch Support </button>
										</div>
										{/* <!--/.card-header --> */}
										<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
											<div className="card-body">
												<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.</p>
											</div>
											{/* <!--/.card-body --> */}
										</div>
										{/* <!--/.accordion-collapse --> */}
									</div>
									{/* <!--/.accordion-item --> */}
									<div className="card plain accordion-item">
										<div className="card-header" id="headingThree">
											<button className="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Header and Slider Options </button>
										</div>
										{/* <!--/.card-header --> */}
										<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
											<div className="card-body">
												<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.</p>
											</div>
											{/* <!--/.card-body --> */}
										</div>
										{/* <!--/.accordion-collapse --> */}
									</div>
									{/* <!--/.accordion-item --> */}
								</div>
								{/* <!--/.accordion --> */}
							</div>
							{/* <!--/column --> */}
						</div>
						{/* <!--/.row --> */}
						<div className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map" data-image-src="src/img/map.png">
							<div className="container py-md-16 py-lg-18">
								<div className="row">
									<div className="col-xl-11 col-xxl-9 mx-auto">
										<h3 className="display-4 mb-8 px-lg-8">We are trusted by over 5000+ clients. Join them now and grow your business.</h3>
									</div>
									{/* <!-- /column --> */}
								</div>
								{/* <!-- /.row --> */}
								<div className="d-flex justify-content-center">
									<span><Link to= "/" className="btn btn-primary rounded-pill">Get Started</Link></span>
								</div>
							</div>
							{/* <!-- /.container --> */}
						</div>
						{/* <!-- /.wrapper --> */}
					</div>
					{/* <!--/.card-body --> */}
				</div>
				{/* <!--/.card --> */}
			</div>
			{/* <!-- /.container --> */}
		</section>
		</div>
	);
}

export default Home;
