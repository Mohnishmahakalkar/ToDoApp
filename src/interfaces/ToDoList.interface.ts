export interface ToDoInterface {
  readonly id: string;
  readonly date: Date;
  readonly notes: string;
  readonly status: ToDostatus;
}

export enum ToDostatus {
  Open = 'Open',
  IN_PROGRESS = 'IN_PROGRESS',
  Completed = 'Completed',
}
