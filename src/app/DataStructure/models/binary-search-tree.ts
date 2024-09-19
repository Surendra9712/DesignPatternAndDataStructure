import { TreeNode } from './TreeNode';

export class BinarySearchTree {
  private root: TreeNode = null;

  public insert(key: number): void {
    this.root = this.insertRec(this.root, key);
  }

  private insertRec(root: TreeNode, key: number): TreeNode {
    if (root === null) {
      return new TreeNode(key);
    }
    if (key < root.value) {
      root.left = this.insertRec(root.left, key);
    } else if (key > root.value) {
      root.right = this.insertRec(root.right, key);
    }
    return root;
  }

  public inOrderTraversal(): number[] {
    const result: number[] = [];
    this.inOrderRec(this.root, result);
    return result;
  }

  private inOrderRec(root: TreeNode, result: number[]): void {
    if (root !== null) {
      this.inOrderRec(root.left, result);
      result.push(root.value);
      this.inOrderRec(root.right, result);
    }
  }

  public search(value: number): TreeNode {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode | null, value: number): TreeNode {
    if (!node) return null;
    if (node.value === value) return node;
    return value < node.value
      ? this.searchNode(node.left, value)
      : this.searchNode(node.right, value);
  }

  public preOrder(): number[] {
    const result: number[] = [];
    this.preOrderTraversal(this.root, result);
    return result;
  }

  private preOrderTraversal(node: TreeNode | null, result: number[]) {
    if (node) {
      result.push(node.value); // Visit the root
      this.preOrderTraversal(node.left, result); // Traverse left subtree
      this.preOrderTraversal(node.right, result); // Traverse right subtree
    }
  }
  public postOrder(): number[] {
    const result: number[] = [];
    this.postOrderTraversal(this.root, result);
    return result;
  }

  private postOrderTraversal(node: TreeNode | null, result: number[]) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
  }

  public bfs(): number[]{
      const result: number[] = [];
      this.bfsTraversing(this.root, result);
      return result;
  }

 private bfsTraversing(root: TreeNode | null,result:number[]): number[] {
    if (!root) return result;
    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }

  public removeNode(value:number): TreeNode|null{
    return this.deleteNode(this.root,value);
  }

  private deleteNode(root: TreeNode | null, value: number): TreeNode | null {
    if (!root) return null;

    // Traverse the tree
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node found

      // Case 1: No child
      if (!root.left && !root.right) {
        return null;
      }

      // Case 2: One child
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }

      // Case 3: Two children
      const minLargerNode = this.findMinNode(root.right);
      root.value = minLargerNode.value; // Replace value with in-order successor's value
      root.right = this.deleteNode(root.right, minLargerNode.value); // Delete the in-order successor
    }
    return root;
  }

  private findMinNode(node: TreeNode | null): TreeNode {
    while (node && node.left){
      node = node.left;
    }
    return node!
  }

  public findMin(): number | null {
    if (!this.root) return null;

    let current: TreeNode | null = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }


  public findMax(): number | null {
    if (!this.root) return null;

    let current: TreeNode | null = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }
}
