import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { userController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [JwtModule.register({ secret: 'P@$$w0rd' })],
  controllers: [userController],
  providers: [UserService],
  exports: [JwtModule],
})
export class UserModule {}
