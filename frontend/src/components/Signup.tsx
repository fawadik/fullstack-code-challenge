import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

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
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Signup
