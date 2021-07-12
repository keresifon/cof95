import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import b4 from "../../component/img/photos/b4.jpg";
import { Link } from "react-router-dom";

const query = `
query {
    blogCollection(
      where: { category_contains_none: "Opinion" }
      order: date_DESC
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
      }
    }
  }
  
  
  
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function BlogBase(props) {
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
    <div className="blog grid grid-view">
      <div className="row isotope gx-md-8 gy-8 mb-8">
        {page.map((o) => (
          <article className="item post col-md-6">
            <div className="card">
              <figure className="card-img-top overlay overlay1 hover-scale">
                <Link to="#">
                  {" "}
                  {o.image && <img src={o.image.url} alt="" />}
                  {!o.image && <img src={b4} alt="" />}
                </Link>
                <figcaption>
                  <h5 className="from-top mb-0">Read More</h5>
                </figcaption>
              </figure>
              <div className="card-body">
                <div className="post-header">
                  <div className="post-category text-line">
                    <Link to="#" className="hover" rel="category">
                      {o.category}
                    </Link>
                  </div>
                  <h2 className="post-title h3 mt-1 mb-3">
                    <Link className="link-dark" href="blog-post.html">
                      {o.title}
                    </Link>
                  </h2>
                </div>
                <div className="post-content">
                  <p>{documentToReactComponents(o.body.json)}</p>
                </div>
              </div>
              <div className="card-footer">
                <ul className="post-meta d-flex mb-0">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt"></i>
                    <span>{ new Date(o.date).toDateString()}</span>
                  </li>
                  <li className="post-author">
                    <Link to="#">
                      <i className="uil uil-user"></i>
                      <span>By {o.authorname}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        ))}
        {/*  */}
      </div>
    </div>
  );
}

export default BlogBase;
