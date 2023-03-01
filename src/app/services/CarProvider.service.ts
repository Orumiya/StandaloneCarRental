import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { Car } from "../models/car";

@Injectable({providedIn: 'root'})
export class CarProviderService {
    constructor(private httpClient: HttpClient){}

    getCars(): Observable<Car[]> {
        return this.httpClient.get<Car[]>('/api/cars')
        .pipe(
            map(res => {
                return res.map((item: Car) => {
                    const mappedCar: Car = {
                        id: item.id,
                        carCategory: item.carCategory,
                        fuelSource: item.fuelSource,
                        transmission: item.transmission,
                        make: item.make,
                        model: item.model,
                        modelYear: item.modelYear,
                        doors: item.doors,
                        color: item.color,
                        mileage: item.mileage,
                        imageTitle: item.imageTitle
                    };
                    return mappedCar;
                });
            }));
    }
}