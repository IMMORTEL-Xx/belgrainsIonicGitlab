import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CooperateurPageRoutingModule } from './cooperateur-routing.module';

import { CooperateurPage } from './cooperateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CooperateurPageRoutingModule
  ],
  declarations: [CooperateurPage]
})
export class CooperateurPageModule {}
