import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-a04-pipe',
  templateUrl: './a04-pipe.component.html',
  styleUrls: ['./a04-pipe.component.css']
})
export class A04PipeComponent implements OnInit {

  pipeCode = `
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, prefix = '', suffix = ''): any {
    value = +value; // cast en entier
    return prefix + ( value * value ) + suffix;
  }

}

`;

  constructor() {
  }

  ngOnInit() {
  }

}
