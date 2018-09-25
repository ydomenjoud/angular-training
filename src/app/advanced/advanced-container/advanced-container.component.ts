import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/advanced/advanced.routes';
import { Route } from '@angular/router';

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

  getTitle(route: Route) {
    return route.data.title;
  }

  ngOnInit() {
  }

}
