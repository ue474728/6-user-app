import { use, useReducer } from 'react';
import { LoginReducer } from '../reducers/LoginReducer';
import Swal from 'sweetalert2';
import { LoginService } from '../service/LoginService';
import { useNavigate } from 'react-router-dom';

const loginService = LoginService;
const initialStateLogin = {
  isAuthenticated: loginService.isAuthenticated(),
  user: loginService.getUser() || {
    email: '',
    name: '',
    isAuthenticated: false,
  },
};

export const UseLoginHook = () => {
  const [login, dispatch] = useReducer(LoginReducer, initialStateLogin);
  const navigate = useNavigate();
  const handlerLogin = (props) => {
    const { email, password } = props;
    const loginResult = loginService.login(email, password);
    if (loginResult.success) {
      const user = loginResult.user;
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
      loginService.setUser(user);
      loginService.setUserIsAuthenticated(true);
      Swal.fire({
        icon: 'success',
        title: 'Login exitoso',
        text: 'Bienvenido al sistema.',
      });
      navigate('/users');
    } else {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: { error: 'Credenciales incorrectas' },
      });
      Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: 'Por favor, verifica tus credenciales.',
      });
      loginService.clearUser();
    }
  };

  const handlerLogout = () => {
    dispatch({ type: 'LOGOUT' });
    loginService.logout();
    Swal.fire({
      icon: 'info',
      title: 'Sesión cerrada',
      text: 'Has cerrado sesión correctamente.',
    });
  };

  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
export default UseLoginHook;
