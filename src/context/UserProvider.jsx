import { UserContext } from './UserContext';
import { UserHook } from '../hooks/UserHook';

export const UserProvider = ({ children }) => {
    const userHook = UserHook();
    return (
        <UserContext.Provider value={{userHook}}>
            {children}
        </UserContext.Provider>
    );
};