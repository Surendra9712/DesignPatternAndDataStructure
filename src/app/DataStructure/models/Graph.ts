import { GraphNode } from './GraphNode';

export class Graph {
  private nodes: GraphNode[] = [];
  private adjacencyMatrix: number[][] = [];
  private adjacencyList: Map<string, GraphNode[]> = new Map();

  addNode(value: any): GraphNode {
    if (this.getNodeByValue(value)) {
      alert('Duplicate Node');
      return; //Return if duplicate node enter
    }
    const node = new GraphNode(this.nodes.length, value);
    this.nodes.push(node);

    // Update adjacency matrix
    this.adjacencyMatrix.forEach(row => row.push(0)); // Add new column
    this.adjacencyMatrix.push(new Array(this.nodes.length).fill(0)); // Add new row

    // Initialize adjacency list entry
    this.adjacencyList.set(value, []);
    return node;
  }

  addEdge(from: GraphNode, to: GraphNode): void {
    this.adjacencyMatrix[from.id][to.id] = 1; // For directed graph
    if (this.adjacencyList.get(from.value)?.includes(to)) {
      alert('Nodes are already connected');
      return; //Return if already edge connected
    }
    this.adjacencyList.get(from.value)?.push(to);
  }

//Get list of nodes
  getNodes(): GraphNode[] {
    return this.nodes;
  }

  getAdjacencyMatrix(): number[][] {
    return this.adjacencyMatrix;
  }

  getAdjacencyList(): Map<string, GraphNode[]> {
    return this.adjacencyList;
  }

  public getNodeByValue(value: string): GraphNode {
    return this.nodes.find(node => node.value === value);
  }

  // Method to remove edge between two nodes from adjacency list
  public removeEdgeFromList(from: GraphNode, to: GraphNode): void {
    const filteredData = this.adjacencyList.get(from.value).filter(node => node.id !== to.id);
    this.adjacencyList = this.adjacencyList.set(from.value, filteredData);
  }

  // Method to remove edge between two nodes from adjacency matrix
  public removeEdgeFromMatrix(from: GraphNode, to: GraphNode): void {
    this.adjacencyMatrix[from.id][to.id] = 0;
  }

  // Method to remove node
  public removeNode(value: string): void {
    const selectedNode = this.getNodeByValue(value);
    if (selectedNode) {
      this.nodes.splice(selectedNode.id, 1);
      this.adjacencyList.forEach((edges) => {
        const index = edges.indexOf(selectedNode);
        if (index !== -1) {
          edges.splice(index, 1);
        }
      });
      this.adjacencyList.delete(value);
      this.adjacencyMatrix.splice(selectedNode.id, 1); // Remove the row

      this.adjacencyMatrix.forEach(row => {
        row.splice(selectedNode.id, 1); // Remove the column
      });
      this.nodes.forEach((node, index) => {
        node.id = index; // Update the id to reflect the new order
      });
    }
  }
}
