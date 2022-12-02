import "./App.css";
import Topbar from "./components/Topbar";
import StudySessionGrid from "./components/StudySessionGrid";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function App() {
  const [groups, setGroups] = useState([]);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [courseText, setCourseText] = useState("");
  const [locationText, setLocationText] = useState("");
  const [timeText, setTimeText] = useState("");
  const [dateText, setDateText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get("http://localhost:5000/posts");
      console.log(data);
      setGroups(data);
    }
    fetch();
  }, []);

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
      posterId: "69",
      name: courseText,
    };
    await axios.post("http://localhost:5000/posts", JSON.stringify(post), {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="App">
      <header>
        <Topbar />
      </header>
      <h1>Create or Join a Study Session!</h1>
      <div className="button-container">
        <Button
          variant="dark"
          className="create-group-button"
          onClick={handleShow}
        >
          Create Group
        </Button>
        <Dropdown className="select-subject-dropdown">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Select a Subject
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <StudySessionGrid groups={groups} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Study Group</Modal.Title>
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
            <Button variant="primary" type="submit">
              Submit Study Group
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
