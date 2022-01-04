import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Please Complete your Profile</h2>
          <Form>
            <Form.Group id="fName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group id="lName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group id="country">
              <Form.Label>Country</Form.Label>
              <Form.Select required>
                <option value="0">Select Country</option>
                <option value="1">Denmark</option>
                <option value="1">Norway</option>
                <option value="1">Sweden</option>
                <option value="1">Finland</option>
              </Form.Select>
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Save Profile
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
