import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactoVetPage } from './contacto-vet';

@NgModule({
  declarations: [
    ContactoVetPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactoVetPage),
  ],
})
export class ContactoVetPageModule {}
