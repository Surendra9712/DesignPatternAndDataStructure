import { Component, OnInit } from '@angular/core';
import { clientCode } from '../models/client.utils';
import { MangoCreator, PizzaCreator, TackoCreator, WrapCreator } from '../models/creator.model';
import { FoodPlanningHistory } from '../models/food-planning-history.model';
import { CarFactory } from '../services/car-factory';
import { CarType } from '../services/car-type';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.scss']
})
export class FactoryMethodComponent {
  private readonly _foodPlanning: FoodPlanningHistory[];
  public carType: CarType;
  public get foodPlanning(): FoodPlanningHistory[] {
    return this._foodPlanning;
  }

  constructor(private carFactory: CarFactory) {
    this._foodPlanning = new Array<FoodPlanningHistory>();
    this.carType = carFactory.getCarType('mountain');
  }

  public trackByFn(index, item: FoodPlanningHistory): number {
    return item.index;
  }

  public btnEatPizza(): void {
    const activity: string = clientCode(new PizzaCreator());
    this.addActivityToHistory(activity);
  }

  public btnEatWrap(): void {
    const activity: string = clientCode(new WrapCreator());
    this.addActivityToHistory(activity);
  }

  public btnEatTacko(): void {
    const activity: string = clientCode(new TackoCreator());
    this.addActivityToHistory(activity);
  }
  public btnEatMango(): void {
    const activity: string = clientCode(new MangoCreator());
    this.addActivityToHistory(activity);
  }

  private addActivityToHistory(activity: string) {
    this._foodPlanning.push(new FoodPlanningHistory(this._foodPlanning.length, activity));
  }

  public changeValue(value: string): void {
    this.carType = this.carFactory.getCarType(value);
  }
}
