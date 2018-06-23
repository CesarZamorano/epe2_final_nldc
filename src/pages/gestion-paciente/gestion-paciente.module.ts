import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionPacientePage } from './gestion-paciente';

@NgModule({
  declarations: [
    GestionPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(GestionPacientePage),
  ],
})
export class GestionPacientePageModule {}
