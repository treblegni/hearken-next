import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import './stories.css'

function StoriesModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Reply to this user!
        </Button> */}
        <Button variant="Link" onClick={handleShow}>Reply to this user! <i class="em em-smiling_face_with_3_hearts" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES AND THREE HEARTS"></i></Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="fancy-text">Reply</Modal.Title>
          </Modal.Header>

          <Modal.Body>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" className="fancy-text"></Form.Control>
                </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleClose} className="fancy-text">
              Send To Reply
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default StoriesModal;