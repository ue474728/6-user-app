import { useParams } from 'react-router-dom';
import { UserFormComponent } from './UserFormComponent';
import { useEffect, useState } from 'react';

export const UserPageFormComponent = (props) => {
  const {
    userHook: { userList, handlerAddUser, OnInputChange, initialStateUser },
  } = props;
  const [userSelected, setUserSelected] = useState(initialStateUser);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
    const user = userList.find(u => String(u.id) === String(id)) || initialStateUser;
    setUserSelected(user);
    }
  }, [id, userList]);

  return (
    <>
      <div className="container my-6">
        <UserFormComponent
          users={userSelected}
          handlerAddUser={handlerAddUser}
          OnInputChange={OnInputChange}
        />
      </div>
    </>
  );
};
