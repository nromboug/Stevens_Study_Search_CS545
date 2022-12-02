import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function StudySessionCard(props) {
  return (
    <Card className="study-session-card" style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Header>
          <Card.Title>{props.name}</Card.Title>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Location: </b>
            {props.location}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Date: </b>
            {props.date}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Time: </b>
            {props.time}
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
