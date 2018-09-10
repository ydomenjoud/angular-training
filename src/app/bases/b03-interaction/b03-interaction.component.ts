import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c03-interaction',
  templateUrl: './b03-interaction.component.html',
  styleUrls: ['./b03-interaction.component.css']
})
export class B03InteractionComponent implements OnInit {

  name = 'Alexandre';

  constructor() {
  }

  nameChange(name: string) {
    this.name = name;
  }

  ngOnInit() {
  }

}
