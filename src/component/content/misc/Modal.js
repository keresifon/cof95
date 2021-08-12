import React, { useState } from "react";
import { Modal, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";


function Modals(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Figure>
            <Link to="con/lagos-2020-21"><Figure.Image
              //width={171}
              //height={180}
              //alt="171x180"
              src="https://res.cloudinary.com/kwesiblack/image/upload/v1628783590/cof95/WhatsApp_Image_2021-08-12_at_4.50.02_PM_rcxxaz.jpg"
            /></Link>
            <Figure.Caption>
              Click Image for Details
            </Figure.Caption> 
          </Figure>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Modals;
