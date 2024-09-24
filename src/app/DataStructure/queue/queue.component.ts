import { Component } from '@angular/core';
import { Queue } from '../models/Queue';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {
  queue: Queue<string> = new Queue<string>();
  item: string = '';
  peekedItem: string | undefined;

  enqueueItem(): void {
    if (this.item) {
      this.queue.enqueue(this.item);
      this.item = ''; // Clear input field
    }
  }

  dequeueItem(): void {
    this.queue.dequeue();
  }

  peekItem(): void {
    this.peekedItem = this.queue.peek();
  }

  clearQueue(): void {
    this.queue.clear();
    this.peekedItem = undefined; // Clear peeked item
  }
}
