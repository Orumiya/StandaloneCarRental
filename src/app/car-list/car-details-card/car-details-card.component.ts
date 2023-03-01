import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-details-card',
  templateUrl: './car-details-card.component.html',
  styleUrls: ['./car-details-card.component.scss']
})
export class CarDetailsCardComponent implements OnInit {
  @Input() car!: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
