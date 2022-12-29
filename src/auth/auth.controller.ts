import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from 'src/dto/Signup-TodoTask.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() newUser: SignupDto) {
    return this.authService.signup(newUser);
  }
}
