import { CarType } from './car-type';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class EverestCar implements CarType {
  getCarType(): string {
    return 'This is Everest Car';
  }
}
