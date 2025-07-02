import { LoginFormComponent } from './components/LoginFormComponent';
import { UseLoginHook } from './hooks/UseLoginHook';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserRoutes } from './routes/UserRoutes';

export const UserApp = () => {
  const { login, handlerLogin, handlerLogout } = UseLoginHook();
  return (
    <>
      <Routes>
        {login.isAuthenticated ? (
          <>
            <Route
              path="/*"
              element={
                <UserRoutes handlerLogout={handlerLogout} login={login} />
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<LoginFormComponent handlerLogin={handlerLogin} />}
            />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};
