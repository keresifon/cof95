import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import b4 from "../../component/img/photos/b4.jpg";
import { Link } from "react-router-dom";
//import _ from "lodash"

const query = `
query {
    blogCollection(
      where: { category_contains_all: "Profile" }
      order: date_DESC
      limit:3
    ) {
      items {
        title
        image {
          url
        }
        body {
          json
        }
        date
        category
        authorname
        slug
      }
    }
  }  
  
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function BlogTop(props) {
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

        setPage(data.blogCollection.items);
      });
  }, []);
  if (!page) {
    return "Loading...";
  }
 
  

    return (
        <div className="blog classic-view">
                {page.map((p) => (
                  < article className="post">
                    <div className="card">
                      <figure className="card-img-top overlay overlay1 hover-scale">
                        < Link to={p.slug}>
                          {p.image && <img src={p.image.url} alt="" />}
                          {!p.image && <img src={b4} alt="" />}
                        </Link>
                        <figcaption>
                          <h5 className="from-top mb-0">Read More</h5>
                        </figcaption>
                      </figure>
                      <div className="card-body">
                        <div className="post-header">
                          <div className="post-category text-line">
                            < Link to="#" className="hover" rel="category">
                              {p.category}
                            </Link>
                          </div>
                          <h2 className="post-title mt-1 mb-0">
                            < Link className="link-dark" to={`/blog/${p.slug}`}>
                              {p.title}
                            </Link>
                          </h2>
                        </div>
                        <div className="post-content">
                          <p>{documentToReactComponents(p.body.json)}</p>
                        </div>
                      </div>
                      <div className="card-footer">
                        <ul className="post-meta d-flex mb-0">
                          <li className="post-date">
                            <i className="uil uil-calendar-alt"></i>
                            <span>{ new Date(p.date).toDateString()}</span>
                          </li>
                          <li className="post-author">
                            < Link to="#">
                              <i className="uil uil-user"></i>
                              <span>By {p.authorname}</span>
                            </Link>
                          </li>
                          {/*<li className="post-comments">
                             < Link to="#">
                              <i className="uil uil-comment"></i>3
                              <span> Comments</span>
                            </Link>
                          </li>
                          <li className="post-likes ms-auto">
                            < Link to="#">
                              <i className="uil uil-heart-alt"></i>3
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
    );
}

export default BlogTop;