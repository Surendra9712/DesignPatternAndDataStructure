import { Component } from '@angular/core';
import { Graph } from '../models/Graph';
import { GraphNode } from '../models/GraphNode';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
  public graph: Graph = new Graph();
  public nodeValue: string = '';
  public fromNode: string = '';
  public toNode: string = '';
  public adjacencyList = new Map();


  addNode(): void {
    if (this.nodeValue === '') {
      alert('Please enter node');
      return;
    }
    this.graph.addNode(this.nodeValue);
    this.adjacencyList = this.graph.getAdjacencyList();
    this.nodeValue = '';
  }

  public createDirectedEdge(): void {
    const { from, to } = this.getFromAndToNode();
    this.graph.addEdge(from, to);
    this.adjacencyList = this.graph.getAdjacencyList();
  }

  public createUndirectedEdge(): void {
    const { from, to } = this.getFromAndToNode();
    this.graph.addEdge(from, to);
    this.graph.addEdge(to, from);
    this.adjacencyList = this.graph.getAdjacencyList();
  }

  public remove(): void {
    const { from, to } = this.getFromAndToNode();
    this.graph.removeEdgeFromList(from, to);
    this.graph.removeEdgeFromMatrix(from, to);
    this.adjacencyList = this.graph.getAdjacencyList();
  }

  public removeNode(): void {
    this.graph.removeNode(this.nodeValue);
    this.adjacencyList = this.graph.getAdjacencyList();
  }


  private getFromAndToNode(): { from: GraphNode, to: GraphNode } {
    const from = this.graph.getNodeByValue(this.fromNode);
    const to = this.graph.getNodeByValue(this.toNode);
    if (!from || !to) {
      alert('From and To node required');
      return;
    }
    return { from, to };
  }
}
