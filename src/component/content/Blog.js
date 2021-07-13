import React from "react";
import { Link } from "react-router-dom";

import BlogBase from "./BlogBase";

//import Layout from '../Layout';
import BlogTop from "./BlogTop";
import Categories from "./misc/Categories";
import RecentPosts from "./misc/RecentPosts";
//import Tags from "./misc/Tags";

  
  



function Blog(props) {
  
  return (
    <div class="content-wrapper">
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
          <div className="row">
            <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
              <h1 className="display-1 mb-3">Happenings</h1>
              <p className="lead px-lg-5 px-xxl-8">
                Welcome to our journal. Here you can find the latest 
                news and  articles.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="wrapper bg-light wrapper-border">
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
      </section> */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12">
            <div className="col-lg-8">
              <BlogTop />
              
              <BlogBase />
               {/* <nav className="d-flex" aria-label="pagination">
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
              </nav>*/}
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
                
                <div className="clearfix"></div>
              </div>
              <RecentPosts />
              <Categories />
              {/* <Tags/> */}
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
