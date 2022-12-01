import { Injectable } from '@nestjs/common';
import { NotesDTO } from 'src/dto/create-TodoTask.dto';
import { ToDoInterface, ToDostatus } from 'src/interfaces/ToDoList.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private todos: ToDoInterface[] = [];
  addToDos(data: NotesDTO): ToDoInterface {
    const { date, notes } = data;
    const note: ToDoInterface = {
      id: uuidv4(),
      date,
      notes,
      status: ToDostatus.Open,
    };

    this.todos.push(note);
    return note;
  }

  fetchToDos() {
    return this.todos;
  }

  fetchNoteByID(id: string): ToDoInterface {
    return this.todos.find((todo) => todo.id == id);
  }

  deleteNoteByID(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
