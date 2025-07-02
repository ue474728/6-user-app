export const LoginService = {
  login: (email, password) => {
    if (email === 'nasxavo@gmail.com' && password === 'admin') {
      const user = { email, name: 'nasxavo', isAuthenticated: true };
      return { success: true, user };
    } else {
      return { success: false, error: 'Credenciales incorrectas' };
    }
  },
  logout: () => {
    sessionStorage.removeItem('user');
    return { success: true };
  },
  isAuthenticated: () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user).isAuthenticated : false;
  },
  getUser: () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  setUser: (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
  },
  clearUser: () => {
    sessionStorage.removeItem('user');
  },
  getUserName: () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user).name : null;
  },
  getUserEmail: () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user).email : null;
  },
  getUserIsAuthenticated: () => {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user).isAuthenticated : false;
  },
  setUserIsAuthenticated: (isAuthenticated) => {
    const user = LoginService.getUser();
    if (user) {
      user.isAuthenticated = isAuthenticated;
      LoginService.setUser(user);
    }
  },
};
