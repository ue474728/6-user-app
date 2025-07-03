import { useParams } from 'react-router-dom';
import { UserFormComponent } from './UserFormComponent';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export const UserPageFormComponent = () => {
  const {
    userHook: {
      userList = [],
      handlerAddUser,
      OnInputChange,
      initialStateUser,
    },
  } = useContext(UserContext);

  const [userSelected, setUserSelected] = useState(initialStateUser);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user =
        userList.find((u) => String(u.id) === String(id)) || initialStateUser;
      setUserSelected(user);
    }
  }, [id, userList, initialStateUser]);

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

UserPageFormComponent.propTypes = {
  userHook: PropTypes.shape({
    userList: PropTypes.array.isRequired,
    handlerAddUser: PropTypes.func.isRequired,
    OnInputChange: PropTypes.func.isRequired,
    initialStateUser: PropTypes.object.isRequired,
  }).isRequired,
};
