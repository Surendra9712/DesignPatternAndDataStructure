import { MountainCar } from './mountain-car';
import { EverestCar } from './Everest-car';
import { CarType } from './car-type';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CarFactory {
  constructor(private mountainCar: MountainCar, private everestCar: EverestCar) {}

  public getCarType(type: string): CarType {
    switch (type) {
      case 'mountain':
        return this.mountainCar;
      case 'everest':
        return this.everestCar;
    }
  }
}
