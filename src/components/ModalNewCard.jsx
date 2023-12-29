import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./ModalNewCard.css";
import React, { useState } from "react";

export default function ModalNewCard(props) {
  const [subject, setSubject] = useState("");
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleSaveChanges = () => {
    console.log("Subject entered:", subject);
    //window.location.reload();
    props.onHide();
  };
  return (
    <Modal {...props} centered contentClassName="neon-modal">
      <Modal.Header closeButton>
        <Modal.Title>Create a New Subject</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mathematics"
              autoFocus
              value={subject}
              onChange={handleSubjectChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="footer">
        <Button className="btn close" onClick={props.onHide}>
          Close
        </Button>
        <Button className="btn save" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
