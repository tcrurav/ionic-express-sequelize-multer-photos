import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBicyclesPageRoutingModule } from './list-bicycles-routing.module';

import { ListBicyclesPage } from './list-bicycles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBicyclesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListBicyclesPage]
})
export class ListBicyclesPageModule {}
