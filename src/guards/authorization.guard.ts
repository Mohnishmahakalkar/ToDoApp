import {
  Injectable,
  CanActivate,
  UnauthorizedException,
  ExecutionContext,
} from '@nestjs/common';

@Injectable()
export class AutherizationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const incomingPayload = request['user'];
    console.log(incomingPayload);
    const userrole = incomingPayload.Role;

    try {
      if (userrole != 'USER') {
        throw new UnauthorizedException();
      }
      return true;
    } catch (e) {
      console.log(e);
    }
  }
}
