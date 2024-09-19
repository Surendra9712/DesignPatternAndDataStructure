import { Component } from '@angular/core';
import { Stack } from '../models/Stack';

@Component({
  selector: 'app-linked-list',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  stack: Stack<string> = new Stack<string>();
  item: string = '';
  peekedItem: string | undefined;

  pushItem(): void {
    if (this.item) {
      this.stack.push(this.item);
      this.item = ''; // Clear input field
    }
  }

  popItem(): void {
    this.stack.pop();
  }

  peekItem(): void {
    this.peekedItem = this.stack.peek();
  }

  clearStack(): void {
    this.stack.clear();
    this.peekedItem = undefined; // Clear peeked item
  }
}
