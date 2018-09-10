import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c04-forms',
  templateUrl: './b04-forms.component.html',
  styleUrls: ['./b04-forms.component.css']
})
export class B04FormsComponent implements OnInit {

  email = '';

  firstname = '';

  constructor() { }

  updateFirstname(firstname) {
    this.firstname = firstname;
  }

  ngOnInit() {
  }

}
