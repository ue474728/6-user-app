import { Button, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
export const UserListComponent = ({
  userList,
  handlerUpdateUser,
  handlerDeleteUser,
}) => {
  const navigate = useNavigate();
  const eliminarUser = (userId) => {
    console.log('Eliminando usuario con ID:', userId);
    handlerDeleteUser(userId);
  };

  const actualizarUser = (user) => {
    console.log('Actualizando usuario con ID:', user.id);
    handlerUpdateUser(user);
  };

  return (
    <>
      <div>
        <h1>Lista Usuarios</h1>
        <Table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(({ id, name, email, password }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => actualizarUser({ id, name, email })}
                    className="me-2"
                  >
                    Actualizar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => eliminarUser(id)}
                    className="me-2"
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/users/registro/${id}`)}
                  >
                    Editar Page
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

UserListComponent.propTypes = {
  userList: PropTypes.array.isRequired,
  handlerUpdateUser: PropTypes.func.isRequired,
  handlerDeleteUser: PropTypes.func.isRequired,
};
