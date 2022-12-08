import "./App.css";
import HomePage from "./components/HomePage";
import Topbar from "./components/Topbar";
import Login from "./components/Login";

function App() {
  console.log(sessionStorage.getItem("token"));
  function setToken(token) {
    if (!token) return;
    sessionStorage.setItem("token", token);
  }
  if (sessionStorage.getItem("token"))
    return (
      <div className="App">
        <header>
          <Topbar />
        </header>
        <HomePage />
      </div>
    );
  else
    return (
      <div className="App">
        <header>
          <Topbar />
        </header>
        <Login setToken={setToken} />
      </div>
    );
}

export default App;
