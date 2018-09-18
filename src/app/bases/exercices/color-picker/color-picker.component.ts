import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class ColorPickerComponent implements OnInit {

  colorsList = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
  ];

  colorControl = new FormControl();

  @Input() color;
  @Output() colorChange = new EventEmitter<string>();

  constructor() { }

  dispatchColorUpdate() {
    this.colorChange.emit(this.colorControl.value);
  }

  ngOnInit() {
    this.colorControl.patchValue(this.color);
  }

}
