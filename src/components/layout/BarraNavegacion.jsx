import { Navbar, Nav, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const BarraNavegacion = ({ handlerLogout, login }) => {
  const { name } = login.user;
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/users">Usuario APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/users/registro">Registro</Nav.Link>
            </Nav>
            <Nav className="justify-content-end" style={{ width: '100%' }}>
              <Navbar.Brand>{name}</Navbar.Brand>
              <Nav.Link onClick={handlerLogout}>Cerrar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

BarraNavegacion.propTypes = {
  handlerLogout: PropTypes.func.isRequired,
  login: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
