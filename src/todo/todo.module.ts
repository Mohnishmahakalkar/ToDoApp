import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from 'src/db/db.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoEntity])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
