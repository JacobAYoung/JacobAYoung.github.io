import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">  
      <h1 class="title">About Us</h1>  
    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">

      <!-- form goes here -->
      <form (ngSubmit)="processForm()">
        <img src="http://cs-hvac.com/images/about.jpg" class="center">
        <p>Cave Springs Heating & Air Conditioning is a bonded, licensed and insured contractor with over 20 years experience. We are a full service heating, cooling, and ventilation contractor for residential and light industrial customers. We repair and replace all makes and models of equipment.

        Cave Springs Heating & Air Conditioning is a family owned business that offers quality equipment, repairs and workmanship at a fair price.
        
        Friendly staff is available to help address your heating and cooling needs. From our family to yours, call us today for quality service at a fair price.</p>

      </form>

    </div>
    </section>
  `,
  styles: [`
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
     }`

]
})
export class AboutComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }

}
