import { UserFormComponent } from './components/UserFormComponent';
import { UserListComponent } from './components/UserListComponent';
import { UserHook } from './hooks/UserHook';

export const UserApp = () => {
  const {
    userList,
    users,
    handlerAddUser,
    handlerUpdateUser,
    handlerDeleteUser,
    OnInputChange,
  } = UserHook();
  return (
    <div className="container my-4">
      <h3>User Application</h3>
      <div className="row">
        <div className="col-md-4">
          <UserFormComponent
            users={users}
            handlerAddUser={handlerAddUser}
            OnInputChange={OnInputChange}
          />
        </div>
        <div className="col-md-8">
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
