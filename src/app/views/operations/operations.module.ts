import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations.routing';
import { OperationsComponent } from './operations.component';
import { ItemComponent } from './item.component';
import { ListComponent } from './list.component';
import { NewComponent } from './new.component';

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule
  ],
  declarations: [OperationsComponent, ItemComponent, ListComponent, NewComponent],
})
export class OperationsModule { }
