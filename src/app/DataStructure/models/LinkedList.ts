import { Node } from './Node';
export interface ItemInterface {
  name: string;
  age: number;
}
export class LinkedList {
  private head: Node | null = null;

  append(data: ItemInterface): void {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(data: ItemInterface): void {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data: ItemInterface): void {
    if (this.head === null) {
      return;
    }
    if (this.head.data.age === data.age) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data.age !== data.age) {
      current = current.next;
    }

    if (current.next === null) {
      return;
    }

    current.next = current.next.next;
  }

  insertAt(value: ItemInterface, position: number) {
    // Create a new node
    const newNode = new Node(value);

    // If inserting at the head (position 0)
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Traverse the list to find the insertion point
    let current = this.head;
    let index = 0;

    while (current !== null && index < position - 1) {
      current = current.next;
      index++;
    }

    // If position is greater than the number of nodes
    if (current === null) {
      throw new Error('Position out of bounds');
    }

    // Insert the new node
    newNode.next = current.next;
    current.next = newNode;
  }

  findIndex(value: ItemInterface) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data.age === value.age) {
        return index;
      }
      current = current.next;
      index++;
    }

    // If the value is not found, return -1
    return -1;
  }

  findItem(value: ItemInterface) {
    let current = this.head;

    while (current !== null) {
      if (current.data.age === value.age) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  display(): ItemInterface[] {
    const result: ItemInterface[] = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}
