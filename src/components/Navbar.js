import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ position: 'relative' }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-shopping-cart-summer-travel-flaticons-lineal-color-flat-icons.png" />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              Button: 0,
              right: 0,
              transform: 'translate(25%, 25%)',
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
