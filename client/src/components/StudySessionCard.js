import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function StudySessionCard({ group }) {
  return (
    <Card className="study-session-card" style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Header>
          <Card.Title>{group.name}</Card.Title>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Location: </b>
            {group.location}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Date: </b>
            {group.date}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Time: </b>
            {group.time}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Posted by: </b>
            {group.posterId}
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-dark">Manage</Button>
        <Button variant="outline-dark">RSVP</Button>
      </Card.Body>
    </Card>
  );
}

export default StudySessionCard;
