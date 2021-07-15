import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {Link, useParams } from "react-router-dom";
import b4 from "../../../component/img/photos/b4.jpg";

import _ from "lodash";

const query = `
query Page($tag: [String!] ){
    blogCollection (where:{contentfulMetadata: {tags:{id_contains_all:$tag}}}){
      items {
		sys{
			id
		}
        title
		image{
			url
		}
        body {
          json
        }
		category
		date
		authorname
		excerpt
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


function TagTemplate(props) {
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
    return p.contentfulMetadata.tags.name === params.slug;
	
  });

  console.log(blogPost)
  

    return (
        <div>
          <section className="wrapper bg-soft-primary">
			<div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<h1 className="display-1 mb-3">Blocks - Blog</h1>
						<nav className="d-inline-block" aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="#">Home</Link></li>
								<li className="breadcrumb-item"><Link to="#">Blocks</Link></li>
								<li className="breadcrumb-item active" aria-current="page">Blog</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</section>
		<section className="wrapper bg-light wrapper-border">
			<div className="container py-14 py-md-16">
				<h2 className="display-4 mb-3 text-center">Our Journal</h2>
				<p className="lead fs-lg mb-10 text-center px-md-16 px-lg-21 px-xl-0">Here are the latest company news from our blog that got the most attention.</p>
				<div className="blog grid grid-view">
      <div className="row isotope gx-md-8 gy-8 mb-8">
        {blogPost.map((o) => (
          <article className="item post col-md-3" key={o.sys.id}>
            <div className="card">
              <figure className="card-img-top overlay overlay1 hover-scale" >
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
                  <div className="post-category text-line">
                    <Link to="#" className="hover" rel="category">
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
                    <span>{ new Date(o.date).toDateString()}</span> <br/>
                  </li>
                  {/* <li className="post-author">
                    <Link to="#">
                      <i className="uil uil-user"></i>
                      <span>By {o.authorname}</span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </article>
        ))}
        {/*  */}
      </div>
    </div>

			</div>
		</section>
		  
        </div>
    );
}

export default TagTemplate;