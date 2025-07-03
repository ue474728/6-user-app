import { Navigate, Route, Routes } from 'react-router-dom';
import { UserAppPage } from '../UserAppPage';
import { BarraNavegacion } from '../components/layout/BarraNavegacion';
import { UserPageFormComponent } from '../components/UserPageFormComponent';
import PropTypes from 'prop-types';
import { UserProvider } from '../context/UserProvider';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

export const UserRoutes = () => {
  const { login, handlerLogout } = useContext(LoginContext);
  return (
    <>
      <UserProvider>
        <BarraNavegacion handlerLogout={handlerLogout} login={login} />
        <Routes>
          <Route path="users" element={<UserAppPage />} />
          <Route
            path="users/registro"
            element={<UserPageFormComponent />}
          />
          <Route
            path="users/registro/:id"
            element={<UserPageFormComponent />}
          />
          <Route path="/" element={<Navigate to="users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};

UserRoutes.propTypes = {
  handlerLogout: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
};
