import { LoginFormComponent } from './components/LoginFormComponent';
import { UserAppPage } from './UserAppPage';
import { BarraNavegacion } from './components/layout/BarraNavegacion';
import { UseLoginHook } from './hooks/UseLoginHook';


export const UserApp = () => {
  const { login, handlerLogin, handlerLogout } = UseLoginHook();
  return (
    <>
      {login.isAuthenticated ? (
        <>
          <BarraNavegacion handlerLogout={handlerLogout} login={login} /> <UserAppPage />
        </>
      ) : (
        <LoginFormComponent handlerLogin={handlerLogin} />
      )}
    </>
  );
};
