import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Todo } from 'src/app/advanced/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todosList: Todo[] = [];

  private todoAddedSubject = new ReplaySubject<Todo>();

  constructor() {
  }

  get todoAdded$() {
    return this.todoAddedSubject.asObservable();
  }

  get todos() {
    return this.todosList;
  }

  getTodo(num: number) {
    return this.todosList.find(t => t.num === num);
  }

  addTodo(todo: Todo) {
    this.todosList.push(todo);
    this.todoAddedSubject.next(todo);
  }

  removeTodo(todo: Todo | number) {
    if (todo instanceof Todo) {
      todo = todo.num;
    }
    const index = this.todosList.findIndex(t => todo === t.num);
    this.todosList.splice(index, 1);
  }

}
