import axios from "axios";
import { useEffect, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
//import { getAuth } from "firebase/auth";

function Profile() {
  const history = useNavigate();

  const { currentUser } = useAuth();
  const authToken = currentUser._delegate.accessToken;
  const fName = useRef<HTMLInputElement | null>(null);
  const lName = useRef<HTMLInputElement | null>(null);
  const country = useRef<HTMLInputElement | any>(null);

  const config = {
    headers: { Authorization: "Bearer" + authToken },
  };
  const bodyParameters = {
    fName: fName,
    lName: lName,
    email: currentUser.email,
    country: country,
  };

  const fetchData = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/v1/users",
      bodyParameters,
      config
    );
    console.log(res.data);
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    fetchData();
    history("/");
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Please Complete your Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="fName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" ref={fName} required />
            </Form.Group>
            <Form.Group id="lName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" ref={lName} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required value={currentUser.email} />
            </Form.Group>
            <Form.Group id="country">
              <Form.Label>Country</Form.Label>
              <Form.Select ref={country} required>
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
