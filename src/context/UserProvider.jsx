import { UserContext } from './UserContext';
import { UserHook } from '../hooks/UserHook';
import PropTypes from 'prop-types';

export const UserProvider = ({ children }) => {
  const userHook = UserHook();
  return (
    <UserContext.Provider value={{ userHook }}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
