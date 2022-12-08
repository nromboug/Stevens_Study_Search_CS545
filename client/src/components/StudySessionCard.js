import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function StudySessionCard({
  group,
  setShow,
  setCourseText,
  setLocationText,
  setTimeText,
  setDateText,
  setPostId,
}) {
  function manage() {
    setCourseText(group.name);
    setLocationText(group.location);
    setTimeText(group.time);
    setDateText(group.date);
    setPostId(group._id);
    setShow(true);
  }

  return (
    <Card
      className="study-session-card"
      style={{ width: "25rem" }}
      key={group.posterId + group.name + group.date}
    >
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
        {group.posterId == sessionStorage.getItem("token") ? (
          <Button
            variant="outline-dark"
            style={{ margin: "5px" }}
            onClick={manage}
          >
            Manage
          </Button>
        ) : null}
        {group.respondents.includes(sessionStorage.getItem("token")) ? null : (
          <Button variant="outline-dark" style={{ margin: "5px" }}>
            RSVP
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default StudySessionCard;
