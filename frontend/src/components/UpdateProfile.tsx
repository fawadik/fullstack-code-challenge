import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UpdateProfile() {
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>

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
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/login">Cancel</Link>
      </div>
    </div>
  );
}

export default UpdateProfile;
