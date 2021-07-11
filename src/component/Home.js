
import React from 'react';
import { Link } from "react-router-dom";
import Layout from './Layout';



function Home(props) {
 

  return (
    <Layout>
    <div>
      <div class="container ">
        <div class="card bg-soft-primary rounded-4 mt-2 mb-5 mb-md-17">
          <div class="card-body p-md-10 py-xl-11 px-xl-15">
            <div class="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
              <div class="col-lg-6 order-lg-2 d-flex position-relative">
                <img
                  class="img-fluid ms-auto mx-auto me-lg-8"
                  //src={bgimage0}
                  src="https://res.cloudinary.com/kwesiblack/image/upload/v1625933534/cof95/friendship-5616035_1920-removebg-preview_gt8bs5.png"
                  srcset="https://res.cloudinary.com/kwesiblack/image/upload/v1625933534/cof95/friendship-5616035_1920-removebg-preview_gt8bs5.png"
                  alt=""
                  data-cue="fadeIn"
                />
                <div data-cue="slideInRight" data-delay="300">
                  <div
                    class="card shadow-lg position-absolute"
                    style={{ bottom: 10, right: -3 }}
                  >
                    <div class="card-body py-4 px-5">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <div class="icon btn btn-circle btn-md btn-soft-primary disabled mx-auto me-3">
                          
                            <i class="uil uil-users-alt"></i>
                          </div>
                          <div>
													<h3 class="counter mb-0 text-nowrap">100+</h3>
													
												</div>
                        </div>
                        {/* <div>
                          <h3 class="counter mb-0 text-nowrap">25000+</h3>
                          <p class="fs-14 lh-sm mb-0 text-nowrap">
                            Happy Clients
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 text-center text-lg-start"
                data-cues="slideInDown"
                data-group="page-title"
                data-delay="600"
              >
                <h1 class="display-2 mb-5">FGCE Class of 95</h1>
                <p class="lead fs-lg lh-sm mb-7 pe-xl-10">
                  "Boys and girls in unity serve"
                </p>
                <div
                  class="d-flex justify-content-center justify-content-lg-start"
                  data-cues="slideInDown"
                  data-group="page-title-buttons"
                  data-delay="900"
                >
                  <span>
                    <Link
                      to="/profile"
                      className="btn btn-lg btn-primary rounded-pill me-2"
                    >
                      Login
                    </Link>
                  </span>
                  {/* <span>
                    <Link
                      to="/"
                      className="btn btn-lg btn-outline-primary rounded-pill"
                    >
                      Contact Us
                    </Link>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-light">
        <div class="container">
          <div class="row gy-6 gy-lg-0">
            <div class="col-lg-4">
              <div class="widget">
                <h3 class="h2 mb-3">Join the Community</h3>
                <p class="lead mb-5">Let's make something great together. </p>
                <Link to="/profile" class="btn btn-primary rounded-pill">
                  Join Us
                </Link>
              </div>
            </div>
            <div class="col-md-4 col-lg-2 offset-lg-2">
              <div class="widget">
                <h4 class="widget-title mb-3">Need Help?</h4>
                <ul class="list-unstyled text-reset mb-0">
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-lg-2">
              <div class="widget">
                <h4 class="widget-title mb-3">Learn More</h4>
                <ul class="list-unstyled text-reset mb-0">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Our Story</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-lg-2">
              <div class="widget">
                <h4 class="widget-title mb-3">Get in Touch</h4>
                <address>
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <Link to="mailto:first.last@email.com" class="link-body">
                  info@email.com
                </Link>
                <br /> +00 (123) 456 78 90
              </div>
            </div>
          </div>
          <hr class="mt-13 mt-md-15 mb-7" />
        </div>
      </footer>
      {/* <section className="wrapper bg-gray">
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
				</div>
			</div>
			<figure className="position-absoute"  style={{bottom:0, left: 0, zIndex:4}}><img src={bgimage} alt="" /></figure> 
		</section>
		<section className="wrapper bg-gray">
  </section> */}
    </div>
    </Layout>
  );
}

export default Home;
