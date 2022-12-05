import { IsDate, IsNotEmpty, Length } from 'class-validator';

export class NotesDTO {
  @IsDate()
  readonly date: string;

  @Length(5, 500)
  @IsNotEmpty()
  readonly notes: string;
}
