import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const requestUrl = context.switchToHttp().getRequest();
    const authTooken = requestUrl.headers['id'];
    let val = false;
    if (authTooken == '10101010') {
      val = true;
      console.log('authentication checked');
    } else {
      val = false;
      throw UnauthorizedException;
    }
    return val;
  }
}
