import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import b4 from "../../../component/img/photos/b4.jpg";
import { Link, useParams } from "react-router-dom";
import Categories from "../misc/Categories";
import RecentPosts from "../misc/RecentPosts";
import _ from "lodash";
import Tags from "../misc/Tags"
//import uniqid from "uniqid"
//import { graphql } from "graphql";

const query = `
  query Page($slug: String){
    blogCollection(where: { slug: $slug }) {
      items {
        sys{
          id
        }
        slug
        title
        date
        authorname
        category
        body {
          json
        }
        image {
          url
        }
        contentfulMetadata {
          tags {
            name
          }
        }
      }
    }
  }
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function BlogTemplate(props) {
  const [page, setPage] = useState(null);
  const params = useParams();
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

        setPage(data.blogCollection.items);
      });
  }, []);
  if (!page) {
    return "Loading...";
  }

  const blogPost = _.filter(page, function (p) {
    return p.slug === params.slug;
  });


  let category = _.map(blogPost, "category");
  let title = _.map(blogPost, "title");
  let date = _.map(blogPost, "date");
  let authorname = _.map(blogPost, "authorname");
  let tag = _.map(blogPost, "contentfulMetadata.tags");
  let tname = _.flatten(tag)

  return (
    <div >
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-10 text-center">
          <div className="row">
            <div className="col-md-10 col-xl-8 mx-auto">
              <div className="post-header">
                <div className="post-category text-line">
                  <Link to={`/category/${category}`} className="hover" rel="category">
                    {category}
                  </Link>
                </div>
                <h1 className="display-1 mb-4">{title}</h1>{" "}
                <ul className="post-meta mb-5">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt"></i>
                    <span>{new Date(date).toDateString()}</span>
                  </li>
                  <li className="post-author">
                    <i className="uil uil-user"></i>
                    
                      <span>{authorname}</span>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light wrapper-border">
        <div className="container inner py-8">
          <div className="row gx-lg-8 gx-xl-12 gy-4 gy-lg-0">
            {/* <div className="col-md-8 align-self-center text-center text-md-start navigation">
              <Link
                to="/"
                className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0 me-1"
              >
                <i className="uil uil-arrow-left"></i> Prev Post
              </Link>
              <Link
                to="/"
                className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-end mb-0"
              >
                Next Post <i className="uil uil-arrow-right"></i>
              </Link>
            </div>*/}
            {/* <aside className="col-lg-4 sidebar"> 
              <form className="search-form">
                <div className="form-label-group mb-0">
                  <input
                    id="search-form"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <label htmlFor="search-form">Search</label>
                </div>
              </form>
            </aside> */}
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12">
            <div className="col-lg-8">
              <div className="blog single">
                <div className="card">
                  {blogPost.map((p) => (
                    <figure className="card-img-top" key={p.sys.id}>
                      {p.image && <img src={p.image.url} alt="" />}
                      {!p.image && <img src={b4} alt="" />}
                    </figure>
                  ))}
                  <div className="card-body">
                    <div className="classic-view">
                      <article className="post">
                        {blogPost.map((p) => (
                          <div className="post-content mb-5" key={p.sys.id}>
                            {documentToReactComponents(p.body.json)}
                          </div>
                        ))}
                        <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                          <div>
                            <ul className="list-unstyled tag-list mb-0">
                            {tname.map((p ,uniqid) => (
                              <li key={uniqid}>
                                <Link 
                                   to={`/tags/${p.name}`}
                                  className="btn btn-soft-ash btn-sm rounded-pill mb-0"
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                              
                            </ul>
                          </div>
                          <div className="mb-0 mb-md-2">
                            {/* <div className="dropdown share-dropdown btn-group">
                              <button
                                className="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="uil uil-share-alt"></i> Share{" "}
                              </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" href="#">
                                  <i className="uil uil-twitter"></i>Twitter
                                </Link>
                                <Link className="dropdown-item" href="#">
                                  <i className="uil uil-facebook-f"></i>Facebook
                                </Link>
                                <Link className="dropdown-item" href="#">
                                  <i className="uil uil-linkedin"></i>Linkedin
                                </Link>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </article>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <aside className="col-lg-4  mt-11 mt-lg-6">
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
              <Tags />
              
              <div className="widget">
                <h4 className="widget-title mb-3">Archive</h4>
                <ul className="unordered-list bullet-primary text-reset">
                  <li>
                    <Link to="#">February 2019</Link>
                  </li>
                  <li>
                    <Link to="#">January 2019</Link>
                  </li>
                  <li>
                    <Link to="#">December 2018</Link>
                  </li>
                  <li>
                    <Link to="#">November 2018</Link>
                  </li>
                  <li>
                    <Link to="#">October 2018</Link>
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

export default BlogTemplate;
