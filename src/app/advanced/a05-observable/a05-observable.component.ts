import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { TodosService } from 'src/app/advanced/todos.service';
import { Todo } from 'src/app/advanced/todo';
import { catchError, debounce, delay } from 'rxjs/operators';

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

  counterValue: number;

  counterState: string;

  replaySubjectCode = `
   const replaySubject = new ReplaySubject(5);

    replaySubject.next('Bonjour,');
    replaySubject.next('j\\'ai une question');
    replaySubject.next('pouvez vous me dire ou télécharger internet ?');
    replaySubject.next('je n\\'arrive pas à me connecter');
  
    replaySubject
      .subscribe(value => {
        console.log(value);
      });
  `;

  creatingObservablecode = `
  startCounter() {
    const tick$ = new Observable<number>(observer => {
      this.counterValue = 0;
      this.counterState = 'running';
      let i = 0;
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i > 9) {
          observer.complete();
          clearInterval(interval);
        }
      }, 500);
    });

    tick$.subscribe(
      value => {
        this.counterValue = value;
      },
      error => {
        this.counterState = error;
      },
      () => {
        this.counterState = 'complete';
      }
    );
  }
`;

  componentCode = `
  this.subscription = this.todosService
    .todoAdded$
    .subscribe(value => {
      this.todoAdded = value;
    });
`;

  component2Code = `
 const observable = interval(1000)
    .pipe(
      skip(5),
      take(4),
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


  replaySubject() {

    const replaySubject = new ReplaySubject(5);

    replaySubject.next('Bonjour,');
    replaySubject.next('j\'ai une question');
    replaySubject.next('pouvez vous me dire ou télécharger internet ?');
    replaySubject.next('je n\'arrive pas à me connecter');

    replaySubject
      .subscribe(value => {
        console.log(value);
      });

  }

  addTodo(message: string) {
    this.todosService.addTodo(new Todo(message));
  }

  startCounter() {
    const tick$ = new Observable<number>(observer => {
      this.counterValue = 0;
      this.counterState = 'running';
      let i = 0;
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i > 9) {
          observer.complete();
          clearInterval(interval);
        }
      }, 500);
    });

    tick$.pipe().subscribe(
      value => {
        this.counterValue = value;
      },
      error => {
        this.counterState = error;
      },
      () => {
        this.counterState = 'complete';
      }
    );
  }

  createObservable() {
    const observable = new Observable(observer => {

      const subject = new BehaviorSubject(null);
      subject.getValue();
      subject.next('yannick');


    });

  }

  ngOnInit() {

    this.replaySubject();

    this.todoAdded$ = this.todosService.todoAdded$;

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
