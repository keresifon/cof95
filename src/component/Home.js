import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import _ from "lodash";
import Modals from "./content/misc/Modal";

const query = `query {
  homeCollection{
    items {
      sys{
        id
      }
      title
      slug
      group
      
    }
  }
}
`;
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function Home(props) {
  const [page, setPage] = useState(null);
  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/?access_token=${REACT_APP_CDA_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.homeCollection.items);
      });
  }, []);
  if (!page) {
    return "Loading...";
  }

  const help = _.filter(page, ["group", ["Help"]]);
  const learn = _.filter(page, ["group", ["Learn"]]);

  return (
    <Layout>
            <Modals />

      <div>
        <div className="container ">
          <div className="card bg-soft-primary rounded-4 mt-2 mb-5 mb-md-17">
            <div className="card-body p-md-10 py-xl-11 px-xl-15">
              <div className="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
                <div className="col-lg-6 order-lg-2 d-flex position-relative">
                  <img
                    className="img-fluid ms-auto mx-auto me-lg-8"
                    //src={bgimage0}
                    src="https://res.cloudinary.com/kwesiblack/image/upload/v1625933534/cof95/friendship-5616035_1920-removebg-preview_gt8bs5.png"
                    srcSet="https://res.cloudinary.com/kwesiblack/image/upload/v1625933534/cof95/friendship-5616035_1920-removebg-preview_gt8bs5.png"
                    alt=""
                    data-cue="fadeIn"
                  />
                  <div data-cue="slideInRight" data-delay="300">
                    <div
                      className="card shadow-lg position-absolute"
                      style={{ bottom: 10, right: -3 }}
                    >
                      <div className="card-body py-4 px-5">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <div className="icon btn btn-circle btn-md btn-soft-primary disabled mx-auto me-3">
                              <i className="uil uil-users-alt"></i>
                            </div>
                            <div>
                              <h3 className="counter mb-0 text-nowrap">
                                <Link to="con/lagos-2020-21">
                                  Lagos 2020 (21)!!!
                                </Link>
                              </h3>
                            </div>
                          </div>
                          {/* <div>
                          <h3 className="counter mb-0 text-nowrap">25000+</h3>
                          <p className="fs-14 lh-sm mb-0 text-nowrap">
                            Happy Clients
                          </p>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 text-center text-lg-start"
                  data-cues="slideInDown"
                  data-group="page-title"
                  data-delay="600"
                >
                  <h1 className="display-2 mb-5">FGCE Class of 95</h1>
                  <p className="lead fs-lg lh-sm mb-7 pe-xl-10">
                    "Boys and girls in unity serve"
                  </p>
                  <div
                    className="d-flex justify-content-center justify-content-lg-start"
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
        <footer className="bg-light">
          <div className="container">
            <div className="row gy-6 gy-lg-0">
              <div className="col-lg-4">
                <div className="widget">
                  <h3 className="h2 mb-3">Join the Community</h3>
                  <p className="lead mb-5">
                    Let's make something great together.{" "}
                  </p>
                  <Link to="/profile" className="btn btn-primary rounded-pill">
                    Join Us
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-lg-2 offset-lg-2">
                <div className="widget">
                  <h4 className="widget-title mb-3">Need Help?</h4>
                  <ul className="list-unstyled text-reset mb-0">
                    {help.map((h) => (
                      <li key={h.sys.id}>
                        <Link to={`/con/${h.slug}`}>{h.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title mb-3">Learn More</h4>
                  <ul className="list-unstyled text-reset mb-0">
                    {learn.map((l) => (
                      <li key={l.sys.id}>
                        <Link to={`/con/${l.slug}`}>{l.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title mb-3">Get in Touch</h4>
                <address>
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <Link to="mailto:first.last@email.com" className="link-body">
                  info@email.com
                </Link>
                <br /> +00 (123) 456 78 90
              </div>
            </div> */}
            </div>
            <hr className="mt-13 mt-md-15 mb-7" />
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default Home;
