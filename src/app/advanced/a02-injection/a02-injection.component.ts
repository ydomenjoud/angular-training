import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a02-injection',
  templateUrl: './a02-injection.component.html',
  styleUrls: ['./a02-injection.component.css']
})
export class A02InjectionComponent implements OnInit {

  serviceCode = `
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todosList: Todo[] = [];

  constructor() {
  }

  get todos() {
    return this.todosList;
  }

  getTodo(num: number) {
    return this.todosList.find(t => t.num === num);
  }

  addTodo(todo: Todo) {
    this.todosList.push(todo);
  }

  removeTodo(todo: Todo | number) {
    if (todo instanceof Todo) {
      todo = todo.num;
    }
    const index = this.todosList.findIndex(t => todo === t.num);
    this.todosList.splice(index, 1);
  }

}

`;

  componentCode = `
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;

  constructor(private todosService: TodosService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const num = +params['id'];
      this.todo = this.todosService.getTodo(num);
    });
  }

}
`;

  constructor() { }

  ngOnInit() {
  }

}
