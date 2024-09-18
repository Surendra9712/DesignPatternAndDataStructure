export class Node {
  data: { name: string; age: number };
  next: Node | null = null;

  constructor(data: { name: string; age: number }) {
    this.data = data;
  }
}
