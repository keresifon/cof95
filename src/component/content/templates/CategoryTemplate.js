import React, { useState, useEffect } from "react";
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link, useParams } from "react-router-dom";
import b4 from "../../../component/img/photos/b4.jpg";
import _ from "lodash";
import ReactPaginate from "react-paginate";

const query = `
query Page($category: [String] ){
  blogCollection (where:{category_contains_all:$category}){
    items {
  sys{
    id
  }
      title
  image{
    url
  }
  slug    
  category
  date
  authorname
  excerpt
  contentfulMetadata {
    tags {
      id
    }
    }
      
    }
  }
}

`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function CategoryTemplate(props) {
  const [page, setPage] = useState(null);
  const params = useParams();
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

  const blogPost = _.filter(page, function (p) {
    return p.category[0] === params.category;
  });

  const recordsPerPage = 9;
  const pagesVisited = pageNumber * recordsPerPage;
  const displayRecords = blogPost
    .slice(pagesVisited, pagesVisited + recordsPerPage)
    .map((o) => (
      <article className="item post col-md-4" key={o.sys.id}>
        <div className="card">
          <figure className="card-img-top overlay overlay1 hover-scale">
            <Link to={`/blog/${o.slug}`}>
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
                <span>{new Date(o.date).toDateString()}</span> <br />
              </li>
              
            </ul>
          </div>
        </div>
      </article>
    ))
  const pageCount = Math.ceil(blogPost.length / recordsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <div>
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-2 pt-md-10 pb-md-10 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-1 mb-3">{params.category}</h1>

            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light wrapper-border">
        <div className="container py-14 py-md-16">
          <h2 className="display-4 mb-3 text-center">Our Journal</h2>
          <p className="lead fs-lg mb-10 text-center px-md-16 px-lg-21 px-xl-0">
            Here are the latest news and articles in the {params.category}{" "}
            category.
          </p>
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
        </div>
      </section>
    </div>
  );
}

export default CategoryTemplate;
