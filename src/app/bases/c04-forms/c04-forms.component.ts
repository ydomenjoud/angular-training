import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c04-forms',
  templateUrl: './c04-forms.component.html',
  styleUrls: ['./c04-forms.component.css']
})
export class C04FormsComponent implements OnInit {

  email = '';

  firstname = '';

  constructor() { }

  updateFirstname(firstname) {
    this.firstname = firstname;
  }

  ngOnInit() {
  }

}
