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

  ifCode = `
<!--
  removed from dom
-->
<div *ngIf="displayed">
  Content displayed
</div>

<!--
ng-template / ng-container
-->
<div *ngIf="displayed; else nothingDisplayed">
  Content displayed
</div>
<ng-template #nothingDisplayed>
  <div>
    Nothing Displayed
  </div>
</ng-template>
`;

  forCode = `
<ul>
  <li *ngFor="let version of versionsList">
    {{ version }}
  </li>
</ul>
`;

  forAdvancedCode = `
<ul>
  <li
    *ngFor="let version of versionsList; let index=index; let last=last; let odd=odd; let even=even; let first=first"
  >
    <button>
      {{ index }} : {{ version }} -
      <span *ngIf="odd">odd</span> -
      <span *ngIf="even">even</span> -
      <span *ngIf="last">Last version</span>
    </button>
  </li>
</ul>
`;

  switchCode = `
<button
    *ngFor="let version of versionsList"
    (click)="selectVersion(version)"
  >
      {{ version }}
</button>

<div [ngSwitch]="selectedVersion">
  <ng-template [ngSwitchCase]="1">
    Angular JS, first try of angular
  </ng-template>
  <ng-template [ngSwitchCase]="2">
    Angular 2, rebuild by Google
  </ng-template>
  <ng-template [ngSwitchCase]="3">
    Angular 3, ghost version
  </ng-template>
  <ng-template [ngSwitchCase]="4">
    Angular 4, improved version
  </ng-template>
  <ng-template ngSwitchDefault>
    Angular {{ selectedVersion }}
  </ng-template>
</div>
`;

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
