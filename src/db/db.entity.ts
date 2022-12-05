import { ToDostatus } from 'src/interfaces/ToDoList.interface';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('todos')
export class ToDoEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  date: string;

  @Column()
  notes: string;

  @Column()
  status: ToDostatus;
}
