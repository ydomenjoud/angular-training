import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/bases/bases.routes';
import { Route } from '@angular/router';

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

  getTitle(route: Route) {
    return route.data.title;
  }

  ngOnInit() {
  }

}
