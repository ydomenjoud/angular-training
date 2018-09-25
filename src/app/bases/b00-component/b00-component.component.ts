import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b00-component',
  templateUrl: './b00-component.component.html',
  styleUrls: ['./b00-component.component.css']
})
export class B00ComponentComponent implements OnInit {

  componentCode = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
`;

  templateCall = '<app-mycomponent></app-mycomponent>';

  constructor() { }

  ngOnInit() {
  }

}
