import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

const initialStateLoginForm = {
  email: '',
  password: '',
};

export const LoginFormComponent = () => {
  const { handlerLogin } = useContext(LoginContext);
  const [loginForm, setLoginForm] = useState(initialStateLoginForm);
  const { email, password } = loginForm;

  const OnInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
      });
    } else {
      // Llamar al handlerLogin con los datos del formulario
      handlerLogin({ email, password });
    }
    // Resetear el formulario después del envío
    setLoginForm(initialStateLoginForm);
  };

  return (
    <div className="container my-6">
      <div className="text-center">
        <h1>Login</h1>
        <p>Por favor, ingresa tus credenciales para acceder al sistema.</p>
        <div className="container my-4">
          <Form className="w-50 mx-auto" onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={OnInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={OnInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

LoginFormComponent.propTypes = {
  handlerLogin: PropTypes.func.isRequired,
};
