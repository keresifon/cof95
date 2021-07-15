import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useParams } from "react-router-dom";
import _ from "lodash";

const query = `
  query Page($slug: String){
      homeCollection(where: { slug: $slug }){
        items {
          sys{
            id
          }
          title
          slug
          group
          body{
            json
          }          
        }
      }
  }
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function HomeTemplate(props) {
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

        setPage(data.homeCollection.items);
      });
  }, []);
  if (!page) {
    return "Loading...";
  }

  const blogPost = _.filter(page, function (p) {
    return p.slug === params.slug;
  });


  //let category = _.map(blogPost, "category");
  let title = _.map(blogPost, "title");
//let date = _.map(blogPost, "date");
//let authorname = _.map(blogPost, "authorname");
 // let tag = _.map(blogPost, "contentfulMetadata.tags");
 // let tname = _.flatten(tag)

  return (
    <div >
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-19 pt-md-14 pb-md-10 text-center">
          <div className="row">
            <div className="col-md-10 col-xl-8 mx-auto">
              <div className="post-header">
                <div className="post-category text-line">
                  
                </div>
                <h1 className="display-1 mb-4">{title}</h1>{" "}
                <ul className="post-meta mb-5">

                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light wrapper-border">
        <div className="container inner py-8">
          <div className="row gx-lg-8 gx-xl-12 gy-4 gy-lg-0">

            
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12">
            <div className="col-lg-8">
              <div className="blog single">
                <div className="card">
                 
                  <div className="card-body">
                    <div className="classic-view">
                      <article className="post">
                        {blogPost.map((p) => (
                          <div className="post-content mb-5" key={p.sys.id}>
                            {documentToReactComponents(p.body.json)}
                          </div>
                        ))}
                        <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                          
                          <div className="mb-0 mb-md-2">
                            
                          </div>
                        </div>
                      </article>
                    </div>
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

export default HomeTemplate;
