import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Home Page!</h1>

    </div>
    </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('http://cs-hvac.com/Van.png') !important;
      background-size: 800px 300px;
      background-repeat: no-repeat;
      background-position: top center;
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
