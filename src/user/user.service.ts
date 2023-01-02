import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { loginuser } from 'src/dto/login-ToDoTask.dto';
import { registeruser } from 'src/dto/registeruser-TodoTask.dto';

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}
  user = [];
  register(newUser: registeruser) {
    this.user.push(newUser);
  }

  login(credentials: loginuser) {
    if (this.user.find((u) => u.username === credentials.username)) {
      throw new ConflictException(`User with username ${credentials.username}`);
    }
    credentials['Role'] = 'ADMIN';
    return this.jwtService.sign(credentials);
  }

  logout(request) {
    const token = request.headers.authorization;
    const tokenArray = token.split(' ');
    console.log(tokenArray[1]);
  }
}
