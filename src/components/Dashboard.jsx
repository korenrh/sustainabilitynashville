import React from "react";
import Home from "./Home";
import About from "./About";
import { Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Dashboard() {
  return (
    <div className="topbar">
      <Router>
        <Navbar bg="light" expand="lg">
          <Link to="/" className="navbar-brand">Nashville Sustainability Dashboard</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="mainNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <NavDropdown title="Get Involved" id="dropdown1" className="font-weight-bold">
                <NavDropdown.Item href="https://data.nashville.gov/">Explore Data</NavDropdown.Item>
                <NavDropdown.Item href="https://urbangreenlab.org/nashville-ej/">Learn More</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="mailto:reilly.h.koren@vanderbilt.edu">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </ul>
            <Form inline className="ml-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <main className="container py-4">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default Dashboard;
