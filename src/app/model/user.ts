import {Roles} from './roles';

interface User {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  roles?: Roles;
}
