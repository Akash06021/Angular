import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  Property={
    "Id": 1,
    "Type":"Property1",
    "Name": "Individual house with garage",
    "Price": 2000
  }

  Property2={
    "Id": 2,
    "Type":"property2",
    "Name": "Farm house",
    "Price": 5000
  }

  Property3={
    "Id": 3,
    "Type":"Property3",
    "Name": "Akash House",
    "Price": 12000
  }

}
