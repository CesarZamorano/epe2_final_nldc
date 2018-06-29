import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  usuario = {} as Usuario;

  constructor(private fireAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  async registrar(usuario: Usuario)
  {
    try{
     const info = await this.fireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);

     if(info)
     {
       this.navCtrl.setRoot('LoginPage');
     }
    }
    catch(e)
    {
      console.error(e);
    }
  }
}
