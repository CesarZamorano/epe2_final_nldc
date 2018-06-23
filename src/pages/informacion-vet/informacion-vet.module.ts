import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacionVetPage } from './informacion-vet';

@NgModule({
  declarations: [
    InformacionVetPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacionVetPage),
  ],
})
export class InformacionVetPageModule {}
