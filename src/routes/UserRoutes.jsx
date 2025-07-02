import { Navigate, Route, Routes } from 'react-router-dom';
import { UserAppPage } from '../UserAppPage';
import { BarraNavegacion } from '../components/layout/BarraNavegacion';
import { UserPageFormComponent } from '../components/UserPageFormComponent';
import { UserHook } from '../hooks/UserHook';

export const UserRoutes = ({ handlerLogout, login }) => {
  const userHook = UserHook();
  return (
    <>
      <BarraNavegacion handlerLogout={handlerLogout} login={login} />
      <Routes>
        <Route path="users" element={<UserAppPage userHook = {userHook} />} />
        <Route path="users/registro" element={<UserPageFormComponent userHook = {userHook} />} />
        <Route path="users/registro/:id" element={<UserPageFormComponent userHook = {userHook} />} />
        <Route path="/" element={<Navigate to="users" />} />
      </Routes>
    </>
  );
};
