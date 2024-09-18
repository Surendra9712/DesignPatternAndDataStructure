import { CarType } from './car-type';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MountainCar implements CarType {
  getCarType(): string {
    return 'This is Mountain Car';
  }
}
