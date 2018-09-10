import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c01-template',
  templateUrl: './b01-template.component.html',
  styleUrls: ['./b01-template.component.css']
})
export class B01TemplateComponent implements OnInit {

  title = 'manage template';

  color = 'green';

  className = 'block';

  data = {
    date: new Date(),
    text: 'hello word',
    amount: 112.23,
    progress: 98
  };

  constructor() {
  }

  toggleTitle() {
    this.title = this.title === 'manage template' ? 'learning binding' : 'manage template';
  }

  toggleColor() {
    this.color = this.color === 'green' ? 'red' : 'green';
  }

  ngOnInit() {
  }

}
