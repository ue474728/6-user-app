import { Button } from 'react-bootstrap';
import { UserListComponent } from './components/UserListComponent';
import PropTypes from 'prop-types';
import { UserModalFormComponent } from './components/UserModalFormComponent';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const UserAppPage = () => {
  const {
    userHook: {
      userList = [],
      users,
      handlerAddUser,
      handlerUpdateUser,
      handlerDeleteUser,
      OnInputChange,
      handlerVisibleForm,
      show,
    },
  } = useContext(UserContext);

  return (
    <div className="container my-4">
      <h3>User Application</h3>
      <UserModalFormComponent
        show={show}
        users={users}
        handlerAddUser={handlerAddUser}
        OnInputChange={OnInputChange}
        handlerVisibleForm={handlerVisibleForm}
      />
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Lista de Usuarios</h1>

          <Button
            variant="primary"
            className="mb-3"
            onClick={() => handlerVisibleForm()}
          >
            Nuevo Usuario
          </Button>

          {userList.length === 0 ? (
            <div className="alert alert-info">No hay usuarios registrados.</div>
          ) : (
            <UserListComponent
              userList={userList}
              handlerUpdateUser={handlerUpdateUser}
              handlerDeleteUser={handlerDeleteUser}
            />
          )}
        </div>
      </div>
    </div>
  );
};
UserAppPage.propTypes = {
  userHook: PropTypes.shape({
    users: PropTypes.object.isRequired,
    userList: PropTypes.array.isRequired,
    show: PropTypes.bool.isRequired,
    handlerAddUser: PropTypes.func.isRequired,
    OnInputChange: PropTypes.func.isRequired,
    handlerVisibleForm: PropTypes.func.isRequired,
    handlerUpdateUser: PropTypes.func.isRequired,
    handlerDeleteUser: PropTypes.func.isRequired,
  }).isRequired,
};
