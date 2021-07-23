import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const query = `
query {
    blogCollection(
      where: { category_contains_none: "Profile" }
      order: date_DESC
    ) {
      items {
        sys{
          id
        }
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
        excerpt
      }
    }
  }
  
  
  
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN,REACT_APP_IMAGE_PLACE_HOLDER } = process.env;

function BlogBase(props) {
  const [page, setPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

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

  const recordsPerPage = 2;
  const pagesVisited = pageNumber * recordsPerPage;
  const displayRecords = page
    .slice(pagesVisited, pagesVisited + recordsPerPage)
    .map((o) => (
      <article className="item post col-md-6" key={o.sys.id}>
        <div className="card">
          <figure className="card-img-top overlay overlay1 hover-scale">
            <Link to={`/blog/${o.slug}`}>
              {" "}
              {o.image && <img src={o.image.url} alt="" />}
              {!o.image && <img src={REACT_APP_IMAGE_PLACE_HOLDER} alt="" />}
            </Link>
            <figcaption>
              <h5 className="from-top mb-0">Read More</h5>
            </figcaption>
          </figure>
          <div className="card-body">
            <div className="post-header">
              <div className="post-category text-line">
                <Link
                  to={`/category/${o.category}`}
                  className="hover"
                  rel="category"
                >
                  {o.category}
                </Link>
              </div>
              <h2 className="post-title h3 mt-1 mb-3">
                <Link className="link-dark" to={`/blog/${o.slug}`}>
                  {o.title}
                </Link>
              </h2>
            </div>
            <div className="post-content">
              <p>{o.excerpt}</p>
            </div>
          </div>
          <div className="card-footer">
            <ul className="post-meta d-flex mb-0">
              <li className="post-date">
                <i className="uil uil-calendar-alt"></i>
                <span>{new Date(o.date).toDateString()}</span>
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
    ));
  const pageCount = Math.ceil(page.length / recordsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="blog grid grid-view">
      <div className="row isotope gx-md-8 gy-8 mb-8">
        {displayRecords}
        {/*  */}
        <div className="pt-2">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"page-link"}
            pageClassName={"page-item"}
            nextLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            disabledClassName={"page-item disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogBase;
