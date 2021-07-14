import React, { useState, useEffect } from "react";
//import b4 from "../../component/img/photos/b4.jpg";
import { Link } from "react-router-dom";
import _ from 'lodash';
//import uniqid from 'uniqid'

const query = `
query {
    blogCollection {
      items {
        sys{
          id
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



function Tags(props) {
    
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
        let tags = _.map(page, "contentfulMetadata.tags");

        let tagname = _.flatten(tags)

                
    return (
        <div className="widget">
                <h4 className="widget-title mb-3">Tags</h4>
                <ul className="list-unstyled tag-list">
                {tagname.map((p , uniqid) => (
                  <li key={uniqid}>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
                  
                </ul>
              </div>
    );
}

export default Tags;