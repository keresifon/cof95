import React, { useState, useEffect } from "react";
//import b4 from "../../component/img/photos/b4.jpg";
import { Link } from "react-router-dom";
import _ from 'lodash';


const query = `
query {
    blogCollection {
      items {
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
      
              setPage(data.blogCollection.items[0].contentfulMetadata[0]);
            });
        }, []);
        if (!page) {
          return "Loading...";
        }

        console.log("Tags",page)
        console.log("L1", _.union(page))
        console.log("L2", _.valuesIn(page))
        console.log("L3", Object.assign({}, ...page))        
    return (
        <div className="widget">
                <h4 className="widget-title mb-3">Tags</h4>
                <ul className="list-unstyled tag-list">
                {page.map((p) => (
                  <li>
                    < Link
                      to="#"
                      className="btn btn-soft-ash btn-sm rounded-pill"
                    >
                      {p.tags[0].name[0]}
                    </Link>
                  </li>
                ))}
                  
                </ul>
              </div>
    );
}

export default Tags;