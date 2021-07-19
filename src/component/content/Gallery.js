import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import "../../../src/component/css/theme/aqua.css";
import { SRLWrapper } from "simple-react-lightbox";
import { CloudinaryContext, Image } from "cloudinary-react";
import axios from "axios";

const { REACT_APP_CLOUD_NAME } = process.env;

function Gallery(props) {
  const [image, setImage] = useState(null);

  //   axios
  //     .get("https://res.cloudinary.com/kwesiblack/image/list/gallery.json")
  //     .then((res) => {
  //       console.log(res.data.resources);
  //       setImage(res.data.resources);
  //     });

  useEffect(() => {
    axios
      .get("https://res.cloudinary.com/kwesiblack/image/list/gallery.json")
      .then((res) => {
        setImage(res.data.resources);
      });
  }, []);
  if (!image) {
    return "Loading...";
  }


  return (
    <Layout>
      <SRLWrapper>
        <CloudinaryContext cloud_name={REACT_APP_CLOUD_NAME}>
          <div>
            <section className="wrapper bg-soft-primary">
              <div className="container pt-10 pb-2 pt-md-10 pb-md-10 text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h1 className="display-1 mb-3">Gallery</h1>
					<p className="lead fs-lg mb-10 text-center px-md-16 px-lg-21 px-xl-0">
            Welcome to the photo gallery, click on an image to expand
          </p>
          
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="container">
            <section id="lightbox" className="wrapper pt-8 pb-2">
              <div className="row gy-10 light-gallery-wrapper">
                {image.map((i) => (
                  <div className="item col-md-2" key={i.public_id}>
                    <figure className="lift rounded mb-3">
                      <Image publicId={i.public_id} />
                    </figure>

                    <p>{i.context.custom.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </CloudinaryContext>
      </SRLWrapper>
    </Layout>
  );
}

export default Gallery;
