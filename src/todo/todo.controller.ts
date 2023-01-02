import { AutherizationGuard } from './../guards/authorization.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ToDoEntity } from 'src/db/db.entity';
import { NotesDTO } from 'src/dto/create-TodoTask.dto';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { TodoService } from './todo.service';

@UseGuards(AuthenticationGuard)
@Controller('todo')
export class TodoController {
  constructor(private toDoService: TodoService) {}

  @Post()
  async createToDo(@Body() data: NotesDTO): Promise<ToDoEntity> {
    const todo = this.toDoService.addToDos(data);
    return todo;
  }

  @UseGuards(AutherizationGuard)
  @Get()
  async getToDos() {
    return this.toDoService.getToDos();
  }

  @Get(':id')
  async getToDoByID(@Param() params): Promise<ToDoEntity> {
    const { id } = params;
    return this.toDoService.getToDoByID(id);
  }

  @Put(':id')
  async updateToDo(@Param('id') id: string, @Body() body: any) {
    const todo: any = await this.toDoService.updateToDo(id, body);
    return todo;
  }

  @Delete(':id')
  async removeToDo(@Param('id') id: string) {
    console.log('Deleete controller');
    await this.toDoService.removeToDo(id);
  }
}
