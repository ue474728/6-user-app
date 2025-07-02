import { Navbar, Nav, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const BarraNavegacion = ({ handlerLogout, login }) => {
  const { name } = login.user;
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Usuario APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: '100%' }}>
              <Navbar.Brand>{name}</Navbar.Brand>
              <Nav.Link href="#link" onClick={handlerLogout}>
                Cerrar SesiÃ³n
              </Nav.Link>
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
