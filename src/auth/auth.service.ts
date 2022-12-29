import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from 'src/dto/Signup-TodoTask.dto';
import { User } from 'src/interfaces/User.interface';

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(private readonly jwtService: JwtService) {}

  signup(newUser: SignupDto): { accessToken: string } {
    if (this.users.find((u) => u.username === newUser.username)) {
      throw new ConflictException(
        `User with username ${newUser.username}.username already exists`,
      );
    }
    const { username, password, firstName, lastName } = newUser;

    this.users.push({ username, password, firstName, lastName });
    return { accessToken: this.jwtService.sign({ user: username, id: '100' }) };
  }
}
