import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const requestUrl = context.switchToHttp().getRequest();
    const authTooken = requestUrl.headers;
    const token = authTooken.authorization.split(' ');
    const payload = this.jwtService.verify(token[1]);
    console.log(payload);
    return true;
  }
}
