import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { TreeComponent } from './tree/tree.component';
import { RouteComponent } from './route/route.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [
  {
    path: '',
    component: RouteComponent,
    children: [
      { path: 'tree', component: TreeComponent },
      { path: 'stack', component: StackComponent },
      { path: 'queue', component: QueueComponent },
      { path: '', redirectTo: 'linked-list', pathMatch: 'full' },
      { path: 'linked-list', component: LinkedListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataStructureRoutingModule {}
