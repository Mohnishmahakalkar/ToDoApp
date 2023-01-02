export class registeruser {
  username: string;
  password: string;
  role: role;
}

enum role {
  'ADMIN',
  'USER',
}
