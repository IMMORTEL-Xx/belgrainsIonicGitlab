import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationPageRoutingModule } from './authentification-routing.module';
import { AuthentificationPage } from './authentification.page';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthentificationPageRoutingModule
  ],
  declarations: [AuthentificationPage]
})
export class AuthentificationPageModule {}
