import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c03-interaction',
  templateUrl: './b03-interaction.component.html',
  styleUrls: ['./b03-interaction.component.css']
})
export class B03InteractionComponent implements OnInit {

  name = 'Alexandre';

  name2 = 'John';

  childComponentCode = `
  @Input() name: string;

  @Output() nameChange = new EventEmitter<string>();

  variantesList = ['01', 'The Great', '666'];

  constructor() {
  }

  changeName(variante) {
    const newName = this.name + ' ' + variante;
    this.nameChange.emit(newName);
  }

  ngOnInit() {
  }

`;

  childTemplateCode = `

nickname <b>{{ name }}</b> not available. <br/>
pick an alternative :
<ul>
  <li *ngFor="let variante of variantesList">
    <button (click)="changeName(variante)">{{ name }} {{ variante }}</button>
  </li>
</ul>

`;

  oneWayCode = `
<p>You entered name <u>{{ name }}</u></p>
<app-c03-child
  [name]="name"
  (nameChange)="nameChange($event)"
></app-c03-child>
`;

  twoWayCode = `
<p>You entered name <u>{{ name2 }}</u></p>
<app-c03-child
  [(name)]="name2"
></app-c03-child>
`;

  constructor() {
  }

  nameChange(name: string) {
    this.name = name;
  }

  ngOnInit() {
  }

}
