import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container">
      <div class="row text-end">
        <div class="col mt-3">
          <img src="../../assets/images/Group.jpg" class="group-img">
        </div>
      </div>
    <hr>
  </div>`,
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
