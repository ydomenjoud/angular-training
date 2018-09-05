import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c03-interaction',
  templateUrl: './c03-interaction.component.html',
  styleUrls: ['./c03-interaction.component.css']
})
export class C03InteractionComponent implements OnInit {

  name = 'Alexandre';

  constructor() {
  }

  nameChange(name: string) {
    this.name = name;
  }

  ngOnInit() {
  }

}
