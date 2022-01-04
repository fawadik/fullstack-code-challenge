import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import UpdateProfile from "./components/UpdateProfile";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
