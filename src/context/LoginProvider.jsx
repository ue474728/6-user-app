import { LoginContext } from './LoginContext';
import { UseLoginHook } from '../hooks/UseLoginHook';

export const LoginProvider = ({ children }) => {
    const { login, handlerLogin, handlerLogout } = UseLoginHook();
  return (
    <LoginContext.Provider value={{login, handlerLogin, handlerLogout}}>
      {children}
    </LoginContext.Provider>
  );
};