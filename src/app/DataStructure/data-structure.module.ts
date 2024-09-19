import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStructureRoutingModule } from './data-structure-routing.module';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TreeComponent } from './tree/tree.component';
import { RouteComponent } from './route/route.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  declarations: [LinkedListComponent, TreeComponent, RouteComponent,StackComponent,QueueComponent],
  imports: [CommonModule, DataStructureRoutingModule, FormsModule, MatButtonModule, MatInputModule]
})
export class DataStructureModule {}
