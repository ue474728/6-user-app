import { Users } from '../data/User';

export const getLisUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Users);
    }, 0);
  });
};
