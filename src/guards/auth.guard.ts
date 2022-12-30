import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const requestUrl = context.switchToHttp().getRequest();
    const authTooken = requestUrl.headers;
    if (!authTooken.authorization) {
      return false;
    }

    const tokenArray = authTooken.authorization.split(' ');
    if (tokenArray.length > 1) {
      try {
        const payload = this.jwtService.verify(tokenArray[1]);
        console.log(payload);
      } catch (e) {
        console.log(e.message);
        return false;
      }

      return true;
    }

    return false;
  }
}
