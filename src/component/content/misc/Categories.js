import React, { useState, useEffect } from "react";
//import b4 from "../../component/img/photos/b4.jpg";
import { Link } from "react-router-dom";
import _ from 'lodash';


const query = `
query {
  blogCollection {
    items {
      category
    }
  }
}

  
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function Categories(props) {
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
const profile = _.filter(page,{category:["Profile"]})
const news = _.filter(page,{category:["News"]})
const opinion = _.filter(page,{category:["Opinion"]})



  return (
    <div className="widget">
      <h4 className="widget-title mb-3">Categories</h4>
      <ul className="unordered-list bullet-primary text-reset">
        <li>
          <Link to="#">Profile ({profile.length})</Link>
        </li>
        <li>
          <Link to="#">News ({news.length})</Link>
        </li>
        <li>
          <Link to="#">Opinion ({opinion.length})</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Categories;
