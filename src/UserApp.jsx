import { Button } from 'react-bootstrap';
import { UserListComponent } from './components/UserListComponent';
import { UserHook } from './hooks/UserHook';
import { UserModalFormComponent } from './components/UserModalFormComponent';

export const UserApp = () => {
  const {
    userList,
    users,
    handlerAddUser,
    handlerUpdateUser,
    handlerDeleteUser,
    OnInputChange,
    handlerVisibleForm,
    show,
  } = UserHook();

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
