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

  templateTitleCode = `
<h3>{{ title }}</h3>
<h3 title="{{ title }}">{{ title }}</h3>
<h3 [title]="title">{{ title }}</h3>
`;

  templateClassCode = `
<div class="{{ className }}">
  classed div {{ className }}
</div>
<div [class]="className">
  classed div {{ className }}
</div>
<div [ngClass]="[className]">
  classed div {{ className }}
</div>
<div [ngClass]="className">
  classed div {{ className }}
</div>
<div [ngClass]="{block: true}">
  classed div {{ className }}
</div>

`;

  templateStyleCode = `
<!-- good syntax -->
<div [style.backgroundColor]="color">
  Colored div {{ color }}
</div>

<div [ngStyle]="{backgroundColor: color}">
  Colored div {{ color }}
</div>

<div [ngStyle]="{backgroundColor: color}">
  Colored div {{ color }}
</div>

<div [ngStyle]="{'background-color': color}">
  Colored div {{ color }}
</div>

<!-- wrong syntaxe-->
<div style="background-color: {{ color }}">
  WRONG Colored div {{ color }}
</div>

`;

  templatePipeCode = `
<ul>
  <li>DatePipe: {{ data.date | date}}</li>
  <li>UpperCasePipe: {{ data.text | uppercase}}</li>
  <li>LowerCasePipe: {{ data.text | lowercase}}</li>
  <li>CurrencyPipe: {{ data.amount | currency}}</li>
  <li>PercentPipe: {{ data.progress | percent }}</li>
  <li>JsonPipe: {{ data | json }}</li>
  <li>KeyvaluePipe: {{ data | keyvalue }}</li>
</ul>

`;

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
