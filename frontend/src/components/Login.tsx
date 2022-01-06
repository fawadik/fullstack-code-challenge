import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current?.value, passwordRef.current?.value);
      history("/profile");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button className="w-100 mt-4" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        New user? Please <Link to="/signup">Sign up</Link>
      </div>
      <div className="w-100 text-center mt-2">
        <Link to="/resetpassword">Forgot Password</Link>
      </div>
    </div>
  );
}

export default Login;
