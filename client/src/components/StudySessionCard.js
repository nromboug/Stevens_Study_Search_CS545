import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function StudySessionCard() {
  return (
    <Card className="study-session-card" style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Header>
          <Card.Title>CS-545</Card.Title>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Location: </b>
            Burchard 118
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Date: </b>
            12/30/2022
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Time: </b>
            8:00pm
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Posted by: </b>
            Billy Bob
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-dark">Manage</Button>
        <Button variant="outline-dark">RSVP</Button>
      </Card.Body>
    </Card>
  );
}

export default StudySessionCard;
