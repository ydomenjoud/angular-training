import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs';
import { TodosService } from 'src/app/advanced/todos.service';
import { Todo } from 'src/app/advanced/todo';
import { delay, groupBy, map, mergeAll, mergeMap, pairwise, take, tap, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-a05-observable',
    templateUrl: './a05-observable.component.html',
    styleUrls: ['./a05-observable.component.css']
})
export class A05ObservableComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    todoAdded: Todo;

    todoAdded$: Observable<Todo>;

    displayBar = false;


    componentCode = `
  this.todoAdded$ = this.todosService.todoAddedObservable;

  this.subscription = this.todosService
    .todoAdded$
    .subscribe(value => {
      this.todoAdded = value;
    });
`;

    component2Code = `
 const observable = interval(1000)
    .pipe(
      take(1),
      skip(5),
      map(value => {
        console.log('map ', value);
        return value;
      }),
      filter(value => value % 2 === 0),
      map(value => value * value)
    );

  observable.subscribe(
    value => {
      console.log(value);
    }
  );
`;



    constructor(private todosService: TodosService) {
    }

    addTodo(message: string) {
        this.todosService.addTodo(new Todo(message));
    }

    ngOnInit() {

        this.todoAdded$ = this.todosService.todoAddedObservable;

        this.subscription = this.todosService
            .todoAdded$
            .subscribe(value => {
                this.todoAdded = value;
            });

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
