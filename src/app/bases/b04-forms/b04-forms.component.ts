import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c04-forms',
  templateUrl: './b04-forms.component.html',
  styleUrls: ['./b04-forms.component.css']
})
export class B04FormsComponent implements OnInit {

  email = '';

  firstname = '';

  ngModelCode = `
<form>
  you entered {{ email }}<br/>
  <div>
    one way<input [ngModel]="email" name="email">
  </div>
  <div>
    Two ways<input [(ngModel)]="email" name="email">
  </div>
</form>
`;

  templateRefCode = `
<form>
  you entered {{ firstname }}
  <div>keyup:
    <input #firstnameInput (keyup)="updateFirstname(firstnameInput.value)">
  </div>
  <div>keydown.enter:
    <input #firstnameInput2 (keydown.enter)="updateFirstname(firstnameInput2.value)" [value]="firstname">
  </div>
</form>
  `;

  validityCode = `
<form #form="ngForm">
  <fieldset
    [ngClass]="{valid: form.valid, invalid: form.invalid}">
    <legend>form {{ form.valid ? 'valid' : 'invalid' }}</legend>
    <div>
      required
      <input
        #email1="ngModel"
        [ngClass]="{valid: email1.valid, invalid: email1.invalid}"
        [(ngModel)]="email"
        name="email1"
        required>
    </div>
    <div>
      required + 4 char
      <input
        #email2="ngModel"
        [ngClass]="{valid: email2.valid, invalid: email2.invalid}"
        [(ngModel)]="email"
        name="email2"
        required
        minlength="4"
      >

      <div *ngIf="email2.invalid && (email2.dirty || email2.touched)">
        <div *ngIf="email2.errors?.required">
          Name is required.
        </div>
        <div *ngIf="email2.errors?.minlength">
          minlength is 4.
        </div>
      </div>
    </div>
  </fieldset>
</form>
`;

  constructor() { }

  updateFirstname(firstname) {
    this.firstname = firstname;
  }

  ngOnInit() {
  }

}
