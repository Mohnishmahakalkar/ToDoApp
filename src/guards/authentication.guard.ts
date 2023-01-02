import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    console.log('came to AuthenticationGuard');
    //console.log(request);
    const authTooken = request.headers;
    if (!authTooken.authorization) {
      return false;
    }

    const tokenArray = authTooken.authorization.split(' ');
    if (tokenArray.length > 1) {
      try {
        const payload = this.jwtService.verify(tokenArray[1]);
        request['user'] = payload;
        // console.log('debug 1', request['user']);
        return true;
      } catch (e) {
        throw new UnauthorizedException();
      }
    }

    return false;
  }
}
