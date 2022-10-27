import { User } from '../interfaces/users';

export const MyDatabaseFunction = (function () {
  const users: User[] = [];

  return {
    add(user: User) {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();