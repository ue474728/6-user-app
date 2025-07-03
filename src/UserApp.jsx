import { LoginFormComponent } from './components/LoginFormComponent';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserRoutes } from './routes/UserRoutes';
import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

export const UserApp = () => {
  const { login } = useContext(LoginContext);
  return (
    <>
      <Routes>
        {login.isAuthenticated ? (
          <>
            <Route path="/*" element={<UserRoutes />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginFormComponent />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};
