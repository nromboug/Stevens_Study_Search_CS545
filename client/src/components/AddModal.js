import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Study Group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter course" />
            <Form.Text className="text-muted">Example: CS 545</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" />
            <Form.Text className="text-muted">Example: GN 101</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="Enter time" />
            <Form.Text className="text-muted">Example: 15:39</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter date" />
            <Form.Text className="text-muted">Example: 12/2/2022</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddModal;
