import { Users } from "../data/user";

export const getLisUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Users);
    }, 1000);
  });
};
