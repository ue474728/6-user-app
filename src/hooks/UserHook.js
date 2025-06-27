import { getLisUsers } from '../service/UserService';
import { useEffect, useState, useReducer } from 'react';
import { UserReducer } from '../reducers/UserReducer';
import { UserConst } from '../const/UserConst';
import Swal from 'sweetalert2';

const initialStateUser = {
  id: 0,
  name: '',
  email: '',
  password: '',
};

export const UserHook = () => {
  const [users, setUsers] = useState(initialStateUser);
  const [userList, setUserList] = useState([]);
  const [, dispatch] = useReducer(UserReducer, []);
  const [show, setShow] = useState(false);

  const { SET_USER, DELETE_USER, UPDATE_USER } = UserConst;
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getLisUsers();
      setUserList(data);
    };
    fetchUsers();
  }, []);

  const handlerAddUser = (user) => {
    if (user.id === 0) {
      dispatch({
        type: SET_USER,
        payload: user,
      });
      setUserList((prevList) => [...prevList, user]);
      setUsers(initialStateUser);
    } else {
      dispatch({
        type: UPDATE_USER,
        payload: user,
      });
      setUserList((prevList) =>
        prevList.map((u) => (u.id === user.id ? user : u))
      );
      setUsers(initialStateUser);
    }
  };

  const handlerDeleteUser = (userId) => {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¡Esto no lo podrás revertir!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡eliminalo!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: DELETE_USER,
          payload: { id: userId },
        });
        setUserList((prevList) =>
          prevList.filter((user) => user.id !== userId)
        );
        setUsers(initialStateUser);

        Swal.fire({
          title: 'Eliminado!',
          text: 'Usuario Eliminado.',
          icon: 'success',
        });
      }
    });
  };

  const handlerUpdateUser = (updatedUser) => {
    setUsers({
      id: updatedUser.id ?? 0,
      name: updatedUser.name ?? '',
      email: updatedUser.email ?? '',
      password: updatedUser.password ?? '',
    });
    handlerVisibleForm();
  };

  const OnInputChange = (event) => {
    const { name, value } = event.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const handlerVisibleForm = () => {
    setShow(!show);
    if (show) {
      setUsers(initialStateUser);
    }
  };

  return {
    userList,
    users,
    handlerAddUser,
    handlerUpdateUser,
    handlerDeleteUser,
    OnInputChange,
    handlerVisibleForm,
    show,
  };
};
