import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from './db.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dbadmin',
      password: 'dbpass',
      database: 'todo',
      entities: [ToDoEntity],
      synchronize: true,
    }),
  ],
})
export class DbModule {}
