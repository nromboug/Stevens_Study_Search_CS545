import "../App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Topbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Stevens Study Search</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {sessionStorage.getItem("token") ? "Signed in!" : "Not signed in!"}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
