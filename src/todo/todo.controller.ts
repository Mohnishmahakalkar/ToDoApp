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
import { AuthGuard } from 'src/guards/auth.guard';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private toDoService: TodoService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createToDo(@Body() data: NotesDTO): Promise<ToDoEntity> {
    const todo = this.toDoService.addToDos(data);
    return todo;
  }

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
    const newCat: any = await this.toDoService.updateToDo(id, body);
    return newCat;
  }

  @Delete(':id')
  async removeToDo(@Param('id') id: string) {
    await this.toDoService.removeToDo(id);
  }
}
