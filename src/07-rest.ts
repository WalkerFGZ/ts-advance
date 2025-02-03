// En JavaScript, los parámetros rest nos permiten enviar la cantidad de parámetros que queramos a una función. Se denotan con ...
// seguido del nombre con el cual identificaremos a estos parámetros:

import { ROLES, User } from './01-anum';

const currentUser: User = {
  username: 'andres',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

console.log(checkAdminRole());

export const checkRoles = (...roles: ROLES[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

console.log(checkRoles(ROLES.ADMIN, ROLES.CUSTOMER));
