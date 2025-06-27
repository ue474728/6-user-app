import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

export const UserFormComponent = (props) => {
  const { users, handlerAddUser, OnInputChange } = props;
  const { name, email, password } = users;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!users.name || !users.email || !users.password) {
      Swal.fire({
        title: "Error en la validación",
        text: "Debes completar todos los campos.",
        icon: "warning"
      });
      return;
    }
    handlerAddUser(users);
  };

  return (
    <>
      <div>
        <h1>Formulario de usuario</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              onChange={OnInputChange}
              value={name}
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={OnInputChange}
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={OnInputChange}
              name="password"
            />
          </Form.Group>

          <button type="submit" className="btn btn-primary">
            {users.id === 0 ? "Agregar Usuario" : "Actualizar Usuario"}
          </button>
        </Form>
      </div>
    </>
  );
};

UserFormComponent.propTypes = {
    users: PropTypes.object.isRequired,
    handlerAddUser: PropTypes.func.isRequired,
    OnInputChange: PropTypes.func.isRequired
}
