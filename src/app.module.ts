import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { DbModule } from './db/db.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user/user.module';

@Module({
  imports: [TodoModule, DbModule, JwtModule, UserModule],
})
export class AppModule {}
