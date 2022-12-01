import "./App.css";
import Topbar from "./components/Topbar";
import StudySessionGrid from "./components/StudySessionGrid";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  return (
    <div className="App">
      <header>
        <Topbar />
      </header>
      <h1>Create or Join a Study Session!</h1>
      <div className="button-container">
        <Button variant="dark" className="create-group-button">
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
        <StudySessionGrid></StudySessionGrid>
      </div>
    </div>
  );
}

export default App;
