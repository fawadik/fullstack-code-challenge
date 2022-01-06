import { ListGroup, Button, Card } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">User Dashboard</h2>
          <Card.Header>User Profile</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>First Name</ListGroup.Item>
            <ListGroup.Item>Last Name</ListGroup.Item>
            <ListGroup.Item>Email</ListGroup.Item>
            <ListGroup.Item>Country</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button className="w-100 mt-4" onClick={handleLogout}>
          Log Out
        </Button>
        <Link to="/updateprofile">Update Profile</Link>
      </div>
    </>
  );
}

export default Dashboard;
