import { Component } from '@angular/core';
import { BinarySearchTree } from '../models/binary-search-tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  public bst: BinarySearchTree = new BinarySearchTree();
  public inputKey: number;
  public bstKeys: number[] = [];
  public preOrderResult: number[] = [];
  public postOrderResult: number[] = [];
  public bfsResult: number[] = [];
  public minValue: number = 0;
  public maxValue: number = 0;
  public searchValue: number = 0;

  public addKey(): void {
    if (this.inputKey !== undefined && this.inputKey !== null) {
      this.bst.insert(this.inputKey);
      this.bstKeys = this.bst.inOrderTraversal();
      this.inputKey = null;
    }
  }

  public search(): void {
    if (this.inputKey !== undefined && this.inputKey !== null) {
      this.searchValue = this.bst.search(this.inputKey)?.value
    }
  }

  public performPreOrder() {
    this.preOrderResult = this.bst.preOrder();
  }

  public performInOrder() {
    this.preOrderResult = this.bst.inOrderTraversal();
  }

  public performPostOrder() {
    this.postOrderResult = this.bst.postOrder();
  }

  public bfsTraversing(): void {
    this.bfsResult = this.bst.bfs();
  }

  public findMin(): void {
   this.minValue = this.bst.findMin();
  }
  public findMax(): void {
    this.maxValue = this.bst.findMax();
  }

  public removeNode(): void {
    this.bst.removeNode(this.inputKey);
    console.log(this.bst);
    this.bstKeys = this.bst.inOrderTraversal();
  }
}
