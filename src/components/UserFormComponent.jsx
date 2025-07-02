import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const UserFormComponent = (props) => {
  const { users, handlerAddUser, handlerVisibleForm } = props;
  const [userForm, setUserForm] = useState(users);

  useEffect(() => {
    if (users) {
      setUserForm(users);
    }
  }, [users]);

  const OnInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!userForm.name || !userForm.email || !userForm.password) {
      Swal.fire({
        title: 'Error en la validación',
        text: 'Debes completar todos los campos.',
        icon: 'warning',
      });
      return;
    }

    handlerAddUser(userForm);
    if (handlerVisibleForm) {
      handlerVisibleForm();
    }
  };

  return (
    <>
      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              onChange={OnInputChange}
              value={userForm.name}
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={userForm.email}
              onChange={OnInputChange}
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su contraseña"
              value={userForm.password}
              onChange={OnInputChange}
              name="password"
            />
          </Form.Group>
          <button type="submit" className="btn btn-primary">
            {userForm.id === 0 ? 'Agregar Usuario' : 'Actualizar Usuario'}
          </button>
          {handlerVisibleForm && (
            <Button
              variant="secondary"
              className="ms-2"
              onClick={() => handlerVisibleForm()}
            >
              {' '}
              Cerrar{' '}
            </Button>
          )}
        </Form>
      </div>
    </>
  );
};

UserFormComponent.propTypes = {
  users: PropTypes.object.isRequired,
  handlerAddUser: PropTypes.func.isRequired,
  handlerVisibleForm: PropTypes.func,
};
