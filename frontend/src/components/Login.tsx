import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>

          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
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
  )
}

export default Login
