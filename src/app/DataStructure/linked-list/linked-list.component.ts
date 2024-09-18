import { Component } from '@angular/core';
import { LinkedList } from '../models/LinkedList';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent {
  linkedList = new LinkedList();
  linkedListDisplay: { name: string; age: number }[] = [];
  newValue: number | null = null;
  name: string | null = null;

  constructor() {
    this.refreshList();
  }

  append(): void {
    if (this.newValue !== null) {
      this.linkedList.append({ age: this.newValue, name: this.name });
      this.refreshList();
    }
  }

  prepend(): void {
    if (this.newValue !== null) {
      this.linkedList.prepend({ age: this.newValue, name: this.name });
      this.refreshList();
    }
  }

  insertAt(): void {
    if (this.newValue !== null) {
      this.linkedList.insertAt({ age: this.newValue, name: this.name }, 1);
      this.refreshList();
    }
  }

  delete(): void {
    if (this.newValue !== null) {
      this.linkedList.delete({ age: this.newValue, name: this.name });
      this.refreshList();
    }
  }

  findIndex(): void {
    console.log(this.linkedList.findIndex({ name: 'one', age: 1 }));
  }

  findItem(): void {
    console.log(this.linkedList.findItem({ name: 'one', age: 1 }));
  }
  private refreshList(): void {
    this.newValue = null;
    this.name = null;
    this.linkedListDisplay = this.linkedList.display();
  }
}
