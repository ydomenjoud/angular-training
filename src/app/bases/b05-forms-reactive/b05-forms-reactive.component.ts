import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export function allowOnlyDomainValidator(control: AbstractControl) {
  const allowed = control.value.indexOf('google.fr') > -1;
  return allowed ? null : {'forbiddenEmail': {value: control.value}};
}

@Component({
  selector: 'app-c05-forms-reactive',
  templateUrl: './b05-forms-reactive.component.html',
  styleUrls: ['./b05-forms-reactive.component.css']
})
export class B05FormsReactiveComponent implements OnInit {

  emailControl = new FormControl('', Validators.email);

  passwordControl = new FormControl('', Validators.required);

  authForm: FormGroup;

  componentFormControlCode = `
  emailControl = new FormControl('', Validators.email);
  passwordControl = new FormControl('', Validators.required);
`;

  templateFormControlCode = `
<form >

  <div>
    EMAIL: <input name="email" [formControl]="emailControl">
    {{ emailControl.value }}
  </div>
  <div>
    PASSWORD: <input name="login" [formControl]="passwordControl" type="password">
    {{ passwordControl.value }}
  </div>

</form>
`;

  componentFormGroupCode = `
function allowOnlyDomainValidator(control: AbstractControl) {
  const allowed = control.value.indexOf('google.fr') > -1;
  return allowed ? null : {'forbiddenEmail': {value: control.value}};
}

this.authForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required, allowOnlyDomainValidator]],
      password: ['', Validators.required],
      // address: this.formBuilder.group({
      //   street: ['', Validators.required],
      //   city: ['', Validators.required],
      //   zip: ['', Validators.pattern(/[0-9]{5}/)]
      // })
    });

    this.authForm.valueChanges.subscribe(value => {
      console.table(this.errors);
    });
`;

  templateFormGroupCode = `
<form [formGroup]="authForm" [ngClass]="{invalid: authForm.invalid}">
  status {{ authForm.status }}
  <div>
    EMAIL (@google.fr): <input name="email" formControlName="email">
  </div>
  <div>
    PASSWORD: <input name="login" formControlName="password" type="password">
  </div>
</form>
`;


  constructor(private formBuilder: FormBuilder) {
  }

  get errors() {
    const errorsList = [];
    Object.keys(this.authForm.controls).forEach(control => {
      const errors = this.authForm.get(control).errors;
      if (errors) {
        errorsList.push({control, errors: Object.keys(errors).join(',')});
      }
    });
    return errorsList;
  }

  setValidEmail() {
    // this.authForm.get('email').setValue('yannick@google.fr');
    // this.authForm.setValue({email: 'yannick@google.fr', password: ''});
    this.authForm.patchValue({email: 'yannick@google.fr'});
  }

  ngOnInit() {
    this.passwordControl.valueChanges.subscribe(
      value => {
        console.log('password', this.passwordControl.valid, this.passwordControl.errors);
      }
    );

    this.emailControl.valueChanges.subscribe(
      value => {
        console.log('email', this.emailControl.valid, this.emailControl.errors);
      }
    );

    // new FormGroup({
    //   email: new FormControl('', Validators.email),
    //   password: new FormControl('', Validators.required)
    // });

    this.authForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required, allowOnlyDomainValidator]],
      password: ['', Validators.required],
      // address: this.formBuilder.group({
      //   street: ['', Validators.required],
      //   city: ['', Validators.required],
      //   zip: ['', Validators.pattern(/[0-9]{5}/)]
      // })
    });

    this.authForm.valueChanges.subscribe(value => {
      console.table(this.errors);
    });
  }

}
