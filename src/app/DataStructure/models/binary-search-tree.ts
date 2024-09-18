import { TreeNode } from './TreeNode';

export class BinarySearchTree {
  private root: TreeNode = null;

  insert(key: number): void {
    this.root = this.insertRec(this.root, key);
  }

  private insertRec(root: TreeNode, key: number): TreeNode {
    if (root === null) {
      return new TreeNode(key);
    }
    if (key < root.key) {
      root.left = this.insertRec(root.left, key);
    } else if (key > root.key) {
      root.right = this.insertRec(root.right, key);
    }
    return root;
  }

  inOrderTraversal(): number[] {
    const result: number[] = [];
    this.inOrderRec(this.root, result);
    return result;
  }

  private inOrderRec(root: TreeNode, result: number[]): void {
    if (root !== null) {
      this.inOrderRec(root.left, result);
      result.push(root.key);
      this.inOrderRec(root.right, result);
    }
  }
}
