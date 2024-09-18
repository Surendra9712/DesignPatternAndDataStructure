import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state/state.component';
import { AngularMaterialModule } from '../modules/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StateComponent],
  imports: [CommonModule, StateRoutingModule, AngularMaterialModule, FormsModule]
})
export class StateModule {}
