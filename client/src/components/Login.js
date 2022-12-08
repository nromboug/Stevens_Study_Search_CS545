import "../App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(credentials) {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login/login",
        JSON.stringify(credentials),
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      return data;
    } catch (e) {
      window.alert("Incorrect username/password combination!");
      window.location.reload();
    }
  }

  async function registerUser(credentials) {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        JSON.stringify(credentials),
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      return data;
    } catch (e) {
      window.alert("Username already exists!");
      window.location.reload();
    }
  }

  const onLogin = async () => {
    if (!(username && password)) {
      window.alert("Username and password required!");
      return;
    }
    const token = await loginUser({ username: username, password: password });
    setToken(token);
    window.location.reload();
  };

  const onRegister = async () => {
    if (!(username && password)) {
      window.alert("Username and password required!");
      return;
    }
    const user = await registerUser({ username: username, password: password });
    window.alert("Account created successfully! Login to continue");
    window.location.reload();
  };

  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <h2>Login/Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>

        <Button
          variant="dark"
          onClick={onLogin.bind(this)}
          style={{ margin: "10px" }}
        >
          Login
        </Button>
        <Button
          variant="dark"
          onClick={onRegister.bind(this)}
          style={{ margin: "10px" }}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Login;
