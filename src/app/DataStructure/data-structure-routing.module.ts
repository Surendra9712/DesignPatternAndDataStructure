import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkedListComponent } from './linked-list/linked-list.component';
import { TreeComponent } from './tree/tree.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  {
    path: '',
    component: RouteComponent,
    children: [
      { path: 'tree', component: TreeComponent },
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
