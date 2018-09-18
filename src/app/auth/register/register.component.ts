import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  errorMessage: string;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  register() {
    // vide le message d'erreur précédent
    this.errorMessage = '';

    // récupération de la valeur du formulaire
    const user = this.formGroup.value;

    this.userService
      .register$(user)
      .subscribe(
        (value) => {
          this.router.navigate(['auth', 'login']);
        },
        ({error: {error: error}}) => {
          this.errorMessage = error.message;
        }
      );
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
