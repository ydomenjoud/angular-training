import { User } from 'src/app/auth/user';

export class AuthToken {
  id: string;
  ttl: string;
  created: Date;
  userId: string;
  user: User;
}
