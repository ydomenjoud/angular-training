import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/bases/bases.routes';

@Component({
  selector: 'app-bases-container',
  templateUrl: './bases-container.component.html',
  styleUrls: ['./bases-container.component.css']
})
export class BasesContainerComponent implements OnInit {

  constructor() { }

  get routes() {
    return routes;
  }

  getName(componentName: string) {
    const length = componentName.length - 'Component'.length;
    return componentName.substring(3, length);
  }

  ngOnInit() {
  }

}
