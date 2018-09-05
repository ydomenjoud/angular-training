import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function allowOnlyDomainValidator(control: AbstractControl) {
  const allowed = control.value.indexOf('google.fr') > -1;
  return allowed ? null : {'forbiddenEmail': {value: control.value}};
}

@Component({
  selector: 'app-c05-forms-reactive',
  templateUrl: './c05-forms-reactive.component.html',
  styleUrls: ['./c05-forms-reactive.component.css']
})
export class C05FormsReactiveComponent implements OnInit {

  emailControl = new FormControl('', Validators.email);

  passwordControl = new FormControl('', Validators.required);

  authForm: FormGroup;

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
