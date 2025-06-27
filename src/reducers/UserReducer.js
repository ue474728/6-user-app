import { UserConst } from '../const/UserConst';
const { SET_USER, UPDATE_USER, DELETE_USER } = UserConst;

// El estado inicial debe ser un array de usuarios
export const UserReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USER:
      action.payload.id = Date.now(); // Asignar un ID único basado en la fecha actual
      return [...state, { ...action.payload, id: Date.now() }];
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload.id);
    default:
      return state;
  }
};
