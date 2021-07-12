import React from "react";
import { Link } from "react-router-dom";

import BlogBase from "./BlogBase";

//import Layout from '../Layout';
import a1 from "../../component/img/photos/a1.jpg";
import a2 from "../../component/img/photos/a2.jpg";
import a3 from "../../component/img/photos/a3.jpg";
import BlogTop from "./BlogTop";

  
  



function Blog(props) {
  
  return (
    <div class="content-wrapper">
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
          <div className="row">
            <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3">Business News</h1>
              <p className="lead px-lg-5 px-xxl-8">
                Welcome to our journal. Here you can find the latest company
                news and business articles.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light wrapper-border">
        <div className="container inner py-8">
          <div className="row gx-lg-8 gx-xl-12 gy-4 gy-lg-0">
            <div className="col-lg-8 align-self-center">
              <div className="blog-filter filter">
                <p>Blog Filter:</p>
                <ul>
                  <li>
                    < Link className="active" to="#">
                      Paper
                    </Link>
                  </li>
                  <li>
                    < Link to="#">Fabric</Link>
                  </li>
                  <li>
                    < Link to="#">Fashion</Link>
                  </li>
                  <li>
                    < Link to="#">Party</Link>
                  </li>
                  <li>
                    < Link to="#">Printables</Link>
                  </li>
                </ul>
              </div>
            </div>
            < aside className="col-lg-4 ">
              <form className="search-form">
                <div className="form-label-group mb-0">
                  <input
                    id="search-form"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <label for="search-form">Search</label>
                </div>
              </form>
            </aside>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12">
            <div className="col-lg-8">
              <BlogTop />
              
              <BlogBase />
               <nav className="d-flex" aria-label="pagination">
                <ul className="pagination">
                  <li className="page-item disabled">
                    < Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="uil uil-arrow-left"></i>
                      </span>
                    </Link>
                  </li>
                  <li className="page-item active">
                    < Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    < Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    < Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    < Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="uil uil-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            < aside className="col-lg-4  mt-8 mt-lg-6">
              <div className="widget">
                <h4 className="widget-title mb-3">About Us</h4>
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum. Nulla vitae elit libero, a
                  pharetra augue. Donec id elit non mi porta gravida at eget
                  metus.
                </p>
                <nav className="nav social">
                  < Link to="#">
                    <i className="uil uil-twitter"></i>
                  </Link>
                  < Link to="#">
                    <i className="uil uil-facebook-f"></i>
                  </Link>
                  < Link to="#">
                    <i className="uil uil-dribbble"></i>
                  </Link>
                  < Link to="#">
                    <i className="uil uil-instagram"></i>
                  </Link>
                  < Link to="#">
                    <i className="uil uil-youtube"></i>
                  </Link>
                </nav>
                <div className="clearfix"></div>
              </div>
              <div className="widget">
                <h4 className="widget-title mb-3">Popular Posts</h4>
                <ul className="image-list">
                  <li>
                    <figure className="rounded">
                      < Link to="blog-post.html">
                        <img src={a1} alt="" />
                      </Link>
                    </figure>
                    <div className="post-content">
                      <h6 className="mb-2">
                        {" "}
                        < Link className="link-dark" to="blog-post.html">
                          Magna Mollis Ultricies
                        </Link>{" "}
                      </h6>
                      <ul className="post-meta">
                        <li className="post-date">
                          <i className="uil uil-calendar-alt"></i>
                          <span>26 Mar 2021</span>
                        </li>
                        <li className="post-comments">
                          < Link to="#">
                            <i className="uil uil-comment"></i>3
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <figure className="rounded">
                      {" "}
                      < Link to="blog-post.html">
                        <img src={a2} alt="" />
                      </Link>
                    </figure>
                    <div className="post-content">
                      <h6 className="mb-2">
                        {" "}
                        < Link className="link-dark" to="blog-post.html">
                          Ornare Nullam Risus
                        </Link>{" "}
                      </h6>
                      <ul className="post-meta">
                        <li className="post-date">
                          <i className="uil uil-calendar-alt"></i>
                          <span>16 Feb 2021</span>
                        </li>
                        <li className="post-comments">
                          < Link to="#">
                            <i className="uil uil-comment"></i>6
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <figure className="rounded">
                      < Link to="blog-post.html">
                        <img src={a3} alt="" />
                      </Link>
                    </figure>
                    <div className="post-content">
                      <h6 className="mb-2">
                        {" "}
                        < Link className="link-dark" to="blog-post.html">
                          Euismod Nullam Fusce
                        </Link>{" "}
                      </h6>
                      <ul className="post-meta">
                        <li className="post-date">
                          <i className="uil uil-calendar-alt"></i>
                          <span>8 Jan 2021</span>
                        </li>
                        <li className="post-comments">
                          < Link to="#">
                            <i className="uil uil-comment"></i>5
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title mb-3">Categories</h4>
                <ul className="unordered-list bullet-primary text-reset">
                  <li>
                    < Link to="#">Teamwork (21)</Link>
                  </li>
                  <li>
                    < Link to="#">Ideas (19)</Link>
                  </li>
                  <li>
                    < Link to="#">Workspace (16)</Link>
                  </li>
                  <li>
                    < Link to="#">Coding (7)</Link>
                  </li>
                  <li>
                    < Link to="#">Meeting (12)</Link>
                  </li>
                  <li>
                    < Link to="#">Business Tips (14)</Link>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title mb-3">Tags</h4>
                <ul className="list-unstyled tag-list">
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Still Life
                    </Link>
                  </li>
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Urban
                    </Link>
                  </li>
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Nature
                    </Link>
                  </li>
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Landscape
                    </Link>
                  </li>
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Macro
                    </Link>
                  </li>
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Fun
                    </Link>
                  </li>
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Workshop
                    </Link>
                  </li>
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      Photography
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h4 className="widget-title mb-3">Archive</h4>
                <ul className="unordered-list bullet-primary text-reset">
                  <li>
                    < Link to="#">February 2019</Link>
                  </li>
                  <li>
                    < Link to="#">January 2019</Link>
                  </li>
                  <li>
                    < Link to="#">December 2018</Link>
                  </li>
                  <li>
                    < Link to="#">November 2018</Link>
                  </li>
                  <li>
                    < Link to="#">October 2018</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
