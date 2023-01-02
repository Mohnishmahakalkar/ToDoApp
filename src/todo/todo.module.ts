import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from 'src/db/db.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ToDoEntity]),
    JwtModule.register({ secret: 'P@$$w0rd' }),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
