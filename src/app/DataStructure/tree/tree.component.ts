import { Component } from '@angular/core';
import { BinarySearchTree } from '../models/binary-search-tree';

@Component({
  selector: 'app-linked-list',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  bst: BinarySearchTree = new BinarySearchTree();
  inputKey: number;
  bstKeys: number[] = [];

  addKey(): void {
    if (this.inputKey !== undefined && this.inputKey !== null) {
      this.bst.insert(this.inputKey);
      this.bstKeys = this.bst.inOrderTraversal();
      console.log(this.bst);
      this.inputKey = null;
    }
  }
}
