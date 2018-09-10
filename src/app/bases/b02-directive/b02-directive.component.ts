import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c02-directive',
  templateUrl: './b02-directive.component.html',
  styleUrls: ['./b02-directive.component.css']
})
export class B02DirectiveComponent implements OnInit {

  displayed = true;

  versionsList: number[] = [1, 2, 3, 4];

  selectedVersion = 1;

  constructor() {
  }

  selectVersion(version) {
    this.selectedVersion = version;
  }

  addNextVersion() {
    let version = +this.versionsList[this.versionsList.length - 1];
    this.versionsList.push(++version);
  }

  toggleVisibility() {
    this.displayed = !this.displayed;
  }

  ngOnInit() {
  }

}
