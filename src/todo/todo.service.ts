import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoEntity } from 'src/db/db.entity';
import { NotesDTO } from 'src/dto/create-TodoTask.dto';
import { ToDostatus } from 'src/interfaces/ToDoList.interface';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(ToDoEntity)
    private todorepository: Repository<ToDoEntity>,
  ) {}

  async addToDos(data: NotesDTO): Promise<ToDoEntity> {
    const { date, notes } = data;
    const note: ToDoEntity = {
      id: uuidv4(),
      date,
      notes,
      status: ToDostatus.Open,
    };
    await this.todorepository.insert(note);
    return note;
  }

  getToDos() {
    return this.todorepository
      .find()
      .catch((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getToDoByID(id) {
    return this.todorepository.findOneBy({ id: id });
  }

  updateToDo(id: string, data: any): Promise<any> {
    return this.todorepository
      .createQueryBuilder()
      .update()
      .set({
        notes: data.notes,
      })
      .where('id = :id', { id })
      .execute();
  }

  removeToDo(id: string): Promise<any> {
    return this.todorepository
      .createQueryBuilder()
      .delete()
      .from(ToDoEntity)
      .where('id = :id', { id })
      .execute();
  }
}
