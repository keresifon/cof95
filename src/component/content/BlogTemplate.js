import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import b4 from "../../component/img/photos/b4.jpg";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";
//import { graphql } from "graphql";

const query = `
  query Page($slug: String){
    blogCollection(where: { slug: $slug }) {
      items {
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

  console.log(blogPost)
  let category = _.map(blogPost, "category");
  let title = _.map(blogPost, "title");
  let date = _.map(blogPost, "date");
  let authorname = _.map(blogPost, "authorname");
  //let image = _.map(blogPost, "image.url");


  return (
    <div>
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-xl-8 mx-auto">
              <div className="post-header">
                <div className="post-category text-line">
                  <Link to="#" className="hover" rel="category">
                    {category}
                  </Link>
                </div>
                <h1 className="display-1 mb-4">{title}</h1>
                <ul className="post-meta mb-5">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt"></i>
                    <span>{new Date(date).toDateString()}</span>
                  </li>
                  <li className="post-author">
                    <Link to="#">
                      <i className="uil uil-user"></i>
                      <span>{authorname}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="blog single mt-n17">
              

                <div className="card">
                {blogPost.map((p) => (
                  <figure className="card-img-top">
                    {p.image && <img src={p.image.url} alt="" />}
                    {!p.image && <img src={b4} alt="" />}
                  </figure>
                  ))}
                  <div className="card-body">
                    <div className="classic-view">
                      <article className="post">
                        {blogPost.map((p) => (
                          <div className="post-content mb-5">
                            {documentToReactComponents(p.body.json)}
                          </div>
                        ))}
                        <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                          <div>
                            <ul className="list-unstyled tag-list mb-0">
                              <li>
                                <Link
                                  to="#"
                                  className="btn btn-soft-ash btn-sm rounded-pill mb-0"
                                >
                                  Still Life
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="btn btn-soft-ash btn-sm rounded-pill mb-0"
                                >
                                  Urban
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="btn btn-soft-ash btn-sm rounded-pill mb-0"
                                >
                                  Nature
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="mb-0 mb-md-2">
                            <div className="dropdown share-dropdown btn-group">
                              <button
                                className="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="uil uil-share-alt"></i> Share{" "}
                              </button>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">
                                  <i className="uil uil-twitter"></i>Twitter
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  <i className="uil uil-facebook-f"></i>Facebook
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  <i className="uil uil-linkedin"></i>Linkedin
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <hr />
                    <div className="author-info d-md-flex align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <figure className="user-avatar">
                          <img
                            className="rounded-circle"
                            alt=""
                            src="src/img/avatars/u5.jpg"
                          />
                        </figure>
                        <div>
                          <h6>
                            <Link to="#" className="link-dark">
                              Nikolas Brooten
                            </Link>
                          </h6>
                          <span className="post-meta fs-15">Sales Manager</span>
                        </div>
                      </div>
                      <div className="mt-3 mt-md-0 ms-auto">
                        <Link
                          to="#"
                          className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0"
                        >
                          <i className="uil uil-file-alt"></i> All Posts
                        </Link>
                      </div>
                    </div>
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Maecenas faucibus mollis interdum. Fusce dapibus, tellus
                      ac. Maecenas faucibus mollis interdum.
                    </p>
                    <nav className="nav social">
                      <Link to="#">
                        <i className="uil uil-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="uil uil-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="uil uil-dribbble"></i>
                      </Link>
                      <Link to="#">
                        <i className="uil uil-instagram"></i>
                      </Link>
                      <Link to="#">
                        <i className="uil uil-youtube"></i>
                      </Link>
                    </nav>
                    <hr />
                    <h3 className="mb-6">You Might Also Like</h3>
                    <div
                      className="carousel owl-carousel blog grid-view mb-16"
                      data-margin="30"
                      data-dots="true"
                      data-autoplay="false"
                      data-autoplay-timeout="5000"
                      data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "992":{"items": "2"}, "1200":{"items": "2"}}'
                    >
                      <div className="item">
                        <article>
                          <figure className="overlay overlay1 hover-scale rounded mb-5">
                            <Link to="#">
                              {" "}
                              <img src="src/img/photos/b4.jpg" alt="" />
                            </Link>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="post-header">
                            <div className="post-category text-line">
                              <Link to="#" className="hover" rel="category">
                                Coding
                              </Link>
                            </div>
                            <h2 className="post-title h3 mt-1 mb-3">
                              <Link className="link-dark" href="blog-post.html">
                                Ligula tristique quis risus
                              </Link>
                            </h2>
                          </div>
                          <div className="post-footer">
                            <ul className="post-meta mb-0">
                              <li className="post-date">
                                <i className="uil uil-calendar-alt"></i>
                                <span>14 Apr 2021</span>
                              </li>
                              <li className="post-comments">
                                <Link to="#">
                                  <i className="uil uil-comment"></i>4
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </article>
                      </div>
                      <div className="item">
                        <article>
                          <figure className="overlay overlay1 hover-scale rounded mb-5">
                            <Link to="#">
                              {" "}
                              <img src="src/img/photos/b5.jpg" alt="" />
                            </Link>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="post-header">
                            <div className="post-category text-line">
                              <Link to="#" className="hover" rel="category">
                                Workspace
                              </Link>
                            </div>
                            <h2 className="post-title h3 mt-1 mb-3">
                              <Link className="link-dark" href="blog-post.html">
                                Nullam id dolor elit id nibh
                              </Link>
                            </h2>
                          </div>
                          <div className="post-footer">
                            <ul className="post-meta mb-0">
                              <li className="post-date">
                                <i className="uil uil-calendar-alt"></i>
                                <span>29 Mar 2021</span>
                              </li>
                              <li className="post-comments">
                                <Link to="#">
                                  <i className="uil uil-comment"></i>3
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </article>
                      </div>
                      <div className="item">
                        <article>
                          <figure className="overlay overlay1 hover-scale rounded mb-5">
                            <Link to="#">
                              {" "}
                              <img src="src/img/photos/b6.jpg" alt="" />
                            </Link>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="post-header">
                            <div className="post-category text-line">
                              <Link to="#" className="hover" rel="category">
                                Meeting
                              </Link>
                            </div>
                            <h2 className="post-title h3 mt-1 mb-3">
                              <Link className="link-dark" href="blog-post.html">
                                Ultricies fusce porta elit
                              </Link>
                            </h2>
                          </div>
                          <div className="post-footer">
                            <ul className="post-meta mb-0">
                              <li className="post-date">
                                <i className="uil uil-calendar-alt"></i>
                                <span>26 Feb 2021</span>
                              </li>
                              <li className="post-comments">
                                <Link to="#">
                                  <i className="uil uil-comment"></i>6
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </article>
                      </div>
                      <div className="item">
                        <article>
                          <figure className="overlay overlay1 hover-scale rounded mb-5">
                            <Link to="#">
                              {" "}
                              <img src="src/img/photos/b7.jpg" alt="" />
                            </Link>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="post-header">
                            <div className="post-category text-line">
                              <Link to="#" className="hover" rel="category">
                                Business Tips
                              </Link>
                            </div>
                            <h2 className="post-title h3 mt-1 mb-3">
                              <Link className="link-dark" href="blog-post.html">
                                Morbi leo risus porta eget
                              </Link>
                            </h2>
                          </div>
                          <div className="post-footer">
                            <ul className="post-meta mb-0">
                              <li className="post-date">
                                <i className="uil uil-calendar-alt"></i>
                                <span>7 Jan 2021</span>
                              </li>
                              <li className="post-comments">
                                <Link to="#">
                                  <i className="uil uil-comment"></i>2
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </article>
                      </div>
                    </div>
                    <hr />
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogTemplate;
