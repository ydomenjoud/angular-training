import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c03-child',
  templateUrl: './b03-child.component.html',
  styleUrls: ['./b03-child.component.css']
})
export class B03ChildComponent implements OnInit {

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

}
