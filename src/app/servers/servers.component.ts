import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //attribute style
  //selector: '.app-servers', //css style
  selector: 'app-servers', //elements - typically use this way
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
