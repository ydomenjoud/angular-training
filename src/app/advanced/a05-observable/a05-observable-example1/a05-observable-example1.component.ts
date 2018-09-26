import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, timer } from 'rxjs';
import { auditTime, filter, finalize, map, startWith, take, takeWhile, tap } from 'rxjs/operators';

@Component({
    selector: 'app-a05-observable-example1',
    templateUrl: './a05-observable-example1.component.html',
    styleUrls: ['./a05-observable-example1.component.css']
})
export class A05ObservableExample1Component implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('cancelButton') cancelButton;

    @ViewChild('saveButton') saveButton;

    loading = false;

    private cancelButtonStream$: Observable<MouseEvent>;

    private saveButtonStream$: Observable<MouseEvent>;

    private subscriptions: Subscription[] = [];

    readonly cancelingTime = 5;

    constructor() {
    }

    // exemple
    // 1 bouton submit qui va lancer une requête à l'api
    // mais qui va attendre 5seconde un clic sur le bouton annuler
    manageButtonInteraction() {

        let canceled = false;

        const cancel$ = this.cancelButtonStream$
            .pipe(
                tap(() => {
                    canceled = true;
                    this.loading = false;
                    console.log('clicked on cancel button');
                })
            ).subscribe();

        const submit$ = this.saveButtonStream$
            .pipe(
                tap(() => {
                    console.log('clicked on save button');
                    this.loading = true;

                    canceled = false;
                }),
                auditTime(this.cancelingTime * 1000),
                filter(() => {
                    console.log('canceled ', canceled);
                    const canBeEmitted = !canceled;
                    canceled = false;
                    return canBeEmitted;
                })
            );

        const subscription = submit$.subscribe(
            (value) => {
                console.log('subscription ', {value});
                this.loading = false;
            },
            error => console.log(error, 'saveButtonStream$'),
            () => console.log('complete'));

        this.subscriptions.push(subscription);
    }


    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.cancelButtonStream$ = fromEvent(this.cancelButton.nativeElement, 'click');
        this.saveButtonStream$ = fromEvent(this.saveButton.nativeElement, 'click');

        this.manageButtonInteraction();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s ? s.unsubscribe() : null);
    }

}
