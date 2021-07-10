import React from 'react';
import Layout from '../Layout';
import p1 from "../../component/img/photos/p1.jpg";
import p1full from "../../component/img/photos/p1-full.jpg";
import p2 from "../../component/img/photos/p2.jpg";
import p2full from "../../component/img/photos/p2-full.jpg";
import p3 from "../../component/img/photos/p3.jpg";
import p4 from "../../component/img/photos/p4.jpg";
import "../../../src/component/css/theme/aqua.css";







function Gallery(props) {
    return (
        <Layout>

        <div className="container">
        <section id="lightbox" className="wrapper pt-16 pb-2">
						<h2 className="display-5 mb-7">Lightbox</h2>
						<div className="row gy-10 light-gallery-wrapper">
							<div className="item col-md-6">
								<figure className="lift rounded mb-4"><a href={p1full} className="lightbox"><img src={p1} srcset="src/img/photos/p1@2x.jpg 2x" alt="" /></a></figure>
								<h3>Image</h3>
							</div>
							<div className="item col-md-6">
								<figure className="lift rounded mb-4"><a href={p2full} className="lightbox" data-sub-html="<h5>Heading</h5><p>Purus Vulputate Sem Tellus Quam</p>"><img src={p2} srcset="src/img/photos/p2@2x.jpg 2x" alt="" /></a></figure>
								<h3>Caption Example</h3>
							</div>
							<div className="item col-md-6">
								<figure className="lift rounded mb-4"><a href="https://www.youtube.com/watch?v=j_Y2Gwaj7Gs" className="lightbox"><img src={p3} srcset="src/img/photos/p3@2x.jpg 2x" alt="" /></a></figure>
								<h3>YouTube</h3>
							</div>
							<div className="item col-md-6">
								<figure className="lift rounded mb-4"><a href="https://vimeo.com/15801179" className="lightbox"><img src={p4} srcset="src/img/photos/p4@2x.jpg 2x" alt="" /></a></figure>
								<h3>Vimeo</h3>
							</div>
						</div>
						
					</section>
		    
        </div>
        </Layout>
    );
}

export default Gallery;