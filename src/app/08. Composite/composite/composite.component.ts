import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { Soldier } from '../models/soldier.model';
import { SoldierComposite } from '../models/soldier.composite';
import { SoldierLeaf } from '../models/soldier.leaf';
import { ChildComponent } from '../child/child.component';

// Resource: https://refactoring.guru/design-patterns/composite/typescript/example
@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss']
})
export class CompositeComponent implements AfterContentInit {
  public saluteLog: string;

  public readonly general: SoldierComposite;
  private readonly officer1: SoldierComposite;
  private readonly officer2: SoldierComposite;
  private readonly officer3: SoldierComposite;

  public childName: string;
  @ContentChildren(ChildComponent) children: QueryList<ChildComponent>;
  constructor() {
    this.general = new SoldierComposite('Keanu Reeves');

    this.officer1 = new SoldierComposite('Hiroyuki Sanada');
    this.addSoldierLeafs(this.officer1, 1, 12);
    this.general.add(this.officer1);

    this.officer2 = new SoldierComposite('Tadanobu Asano');
    this.addSoldierLeafs(this.officer2, 13, 30);
    this.general.add(this.officer2);

    this.officer3 = new SoldierComposite('Jin Akanishi');
    this.addSoldierLeafs(this.officer3, 31, 43);
    this.general.add(this.officer3);
    this.childName = 'hello';
  }

  private addSoldierLeafs(soldier: SoldierComposite, start: number, end: number): void {
    for (let i = start; i <= end; i++) {
      soldier.add(new SoldierLeaf('Soldier ' + i.toString()));
    }
  }

  public btnSaluteToGeneral(): void {
    this.saluteLog = this.general.salute();
  }

  public ngAfterContentInit() {
    this.children.changes.subscribe(item => {
      console.log(item);
    });
    // this.children.forEach(item => {
    //   console.log(item);
    // });
  }

  public changeName(): void {
    this.childName = 'kerhfdsuig';
  }
}
