let num = 1;

export class Todo {
  num: number = num++;

  date: Date = new Date();

  constructor(private message: string = '') {
  }
}
