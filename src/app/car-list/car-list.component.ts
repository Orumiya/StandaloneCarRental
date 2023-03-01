import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarProviderService } from '../services/CarProvider.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars!: Car[];

  constructor(private carProviderService: CarProviderService) { }

  ngOnInit(): void {
    this.carProviderService.getCars().subscribe(cars => this.cars = cars);
  }

}
