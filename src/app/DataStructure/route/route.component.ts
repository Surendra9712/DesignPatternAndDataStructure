import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit{
  public title: string ='';
  constructor(private route:Router) {
  }

  public ngOnInit() {
    this.route.events.subscribe(params => {
      const urlTree = this.route.url.split('/');
      this.title = urlTree[urlTree.length-1].replace(/-/g, ' ');
    })
  }
}
