import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isCollapse = true

  ngOnInit(): void {
  }

  toggleState() {
    let foo = this.isCollapse;
    this.isCollapse = !foo
  }

}
