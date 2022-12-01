import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotesDTO } from 'src/dto/create-TodoTask.dto';
import { ToDoInterface } from 'src/interfaces/ToDoList.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private toDoService: TodoService) {}

  @Post()
  async createToDo(@Body() data: NotesDTO): Promise<ToDoInterface> {
    const todo = this.toDoService.addToDos(data);
    return todo;
  }

  @Get()
  fetchToDo() {
    return this.toDoService.fetchToDos();
  }

  @Get(':id')
  async getNoteByID(@Param('id') id: string): Promise<ToDoInterface> {
    const note: ToDoInterface = await this.toDoService.fetchNoteByID(id);
    return note;
  }

  @Delete(':id')
  deleteNoteByID(@Param('id') id: string): void {
    this.toDoService.deleteNoteByID(id);
  }
}
