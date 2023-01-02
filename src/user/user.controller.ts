import { Body, Controller, Get, Post, Res, Req } from '@nestjs/common';
import { loginuser } from 'src/dto/login-ToDoTask.dto';
import { registeruser } from 'src/dto/registeruser-TodoTask.dto';
import { UserService } from './user.service';

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() newUser: registeruser) {
    return this.userService.register(newUser);
  }

  @Post('login')
  login(@Body() credentials: loginuser) {
    return this.userService.login(credentials);
  }

  @Get('logout')
  logout(@Req() request) {
    this.userService.logout(request);
  }
}
