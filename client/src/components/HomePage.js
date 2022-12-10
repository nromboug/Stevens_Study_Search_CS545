import "../App.css";
import StudySessionGrid from "./StudySessionGrid";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  const [groups, setGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [validated, setValidated] = useState(false);
  const [courseText, setCourseText] = useState("");
  const [locationText, setLocationText] = useState("");
  const [timeText, setTimeText] = useState("");
  const [dateText, setDateText] = useState("");
  const [postId, setPostId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleDelete = async (event) => {
    if (postId) {
      await axios.delete(`http://localhost:5000/posts/${postId}`);
    }
    setShowDelete(false);
  };

  const handleShow = () => {
    setCourseText("");
    setLocationText("");
    setTimeText("");
    setDateText("");
    setPostId(null);
    setShow(true);
  };

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get("http://localhost:5000/posts");
      console.log(data);
      setGroups(data);
    }
    fetch();
  }, [groups]);

  useEffect(() => {
    console.log("Filtering");
    console.log(groups);
    let filteredGroups = groups.filter((group) =>
      String(group.name.toUpperCase()).startsWith(searchTerm.toUpperCase())
    );
    console.log(`filtered groups`);
    console.log(filteredGroups);
    setFilteredGroups(filteredGroups);
  }, [searchTerm, groups]);

  const handleSubmit = async (event) => {
    console.log("Fart");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      await submitGroup();
    }
    setValidated(true);
  };

  const submitGroup = async () => {
    const post = {
      location: locationText,
      date: dateText,
      time: timeText,
      posterId: sessionStorage.getItem("token"),
      name: courseText,
    };
    if (postId) {
      await axios.put(
        `http://localhost:5000/posts/${postId}`,
        JSON.stringify(post),
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      await axios.post("http://localhost:5000/posts", JSON.stringify(post), {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      });
    }
  };
  return (
    <div>
      <h1>Create or Join a Study Session!</h1>
      <div className="button-container">
        <Button
          variant="dark"
          className="create-group-button"
          onClick={handleShow}
        >
          Create Group
        </Button>

        <Form className="subject-search">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={6}>
              Course Search
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="text"
                placeholder="Ex: CS 135"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  console.log(searchTerm);
                }}
              />
            </Col>
          </Form.Group>
        </Form>
        {/* <Dropdown className="select-subject-dropdown">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Select a Subject
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
      <div>
        <StudySessionGrid
          groups={searchTerm.length ? filteredGroups : groups}
          setShow={setShow}
          setShowDelete={setShowDelete}
          setCourseText={setCourseText}
          setLocationText={setLocationText}
          setTimeText={setTimeText}
          setDateText={setDateText}
          setPostId={setPostId}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create/Manage Study Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter course"
                value={courseText}
                onChange={(e) => setCourseText(e.target.value)}
              />
              <Form.Text className="text-muted">Example: CS 545</Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter location"
                value={locationText}
                onChange={(e) => setLocationText(e.target.value)}
              />
              <Form.Text className="text-muted">Example: GN 101</Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                required
                type="time"
                placeholder="Enter time"
                value={timeText}
                onChange={(e) => setTimeText(e.target.value)}
              />
              <Form.Text className="text-muted">Example: 15:39</Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Enter date"
                value={dateText}
                onChange={(e) => setDateText(e.target.value)}
              />
              <Form.Text className="text-muted">Example: 12/2/2022</Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <br />
            <Button variant="dark" type="submit">
              Submit Study Group
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this post?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseDelete}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HomePage;
