import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const query = `
query {
    blogCollection(order: date_DESC, limit: 5) {
      items {
        sys{
          id
        }
        title
        slug
        date
        excerpt
        image {
          url
        }
      }
    }
  }
  

  
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN ,REACT_APP_IMAGE_PLACE_HOLDER } = process.env;

function RecentPosts(props) {
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
    <div className="widget">
                <h4 className="widget-title mb-3">Recent Posts</h4>
                <ul className="image-list">
                {page.map((p) => (

                  <li key={p.sys.id}>
                    <figure className="rounded">
                      < Link to={`/blog/${p.slug}`}>
                      {p.image && <img src={p.image.url} alt="" />}
                          {!p.image && <img src={REACT_APP_IMAGE_PLACE_HOLDER} alt="" />}
                      </Link>
                    </figure>
                    <div className="post-content">
                      <h6 className="mb-2">
                        {" "}
                        < Link className="link-dark" to={`/blog/${p.slug}`}>
                          {p.title}
                        </Link>{" "}
                      </h6>
                      <ul className="post-meta">
                        <li className="post-date">
                          <i className="uil uil-calendar-alt"></i>
                          <span>{ new Date(p.date).toDateString()}</span>
                        </li>
                        
                      </ul>
                    </div>
                  </li>
                ))}
                  
                </ul>
              </div>
  );
}

export default RecentPosts;
