import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {routes} from '../Layout/router'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import type {FC} from "react"

const Appbar: FC = (): JSX.Element => (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className='navbar-brand'>
            skin-clinik
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.map((route)=> (
            <Link key={route.path} to={route.path} className="nav-link">{route.title}</Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Link to={'registeration'}>
              <Button>Register</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

export default Appbar;