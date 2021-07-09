import React , { useState, useEffect } from 'react';
import Layout from '../Layout';


const query = `
{
    astatementCollection (order:date_DESC){
        items {
          name
          date 
          doc {
            url
          }
        }
      }
  }
`;

const {REACT_APP_SPACE_ID,REACT_APP_CDA_TOKEN} = process.env

function AccSatement(props) {
    const [page, setPage] = useState(null);
    useEffect(() => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/?access_token=${REACT_APP_CDA_TOKEN}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",

            },
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
    
            //setPage(data.astatementCollection.items[0]);
            setPage(data.astatementCollection.items);
          });
      }, []);
    
      if (!page) {
        return "Loading...";
      }
    return (
      <Layout>
        <div className="container">
        <div className="col ml-auto">
							<h2 className="display-5 mb-7">Account Statements</h2>
						</div>
          						<div class="row text-center gy-6 mt-6">

            {page.map(p => (
 <div class="col-md-6 col-lg-4">
              <div class="icon btn btn-circle btn-lg btn-outline-pink disabled mb-4"> <i class="uil uil-laptop-cloud"></i> </div>
              <h4>{p.name}</h4>
              <p class="mb-2">{p.date}</p>
              <a href={p.doc.url} target="_blank" rel="noopener noreferrer" class="more hover link-red"><i className="uil uil-file-download"></i>Download</a>
            </div>
            

      
            ))
        }
        </div>
    </div>
    </Layout>
    );
}

export default AccSatement;