import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/advanced/advanced.routes';

@Component({
  selector: 'app-advanced-container',
  templateUrl: './advanced-container.component.html',
  styleUrls: ['./advanced-container.component.css']
})
export class AdvancedContainerComponent implements OnInit {
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
