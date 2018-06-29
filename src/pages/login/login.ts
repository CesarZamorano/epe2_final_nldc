import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {} as Usuario;

  constructor(public toastCtrl: ToastController,private fireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(usuario: Usuario)
  {
    try{
     const info = await this.fireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password);

     if(info)
     {
       await this.navCtrl.setRoot(HomePage);
     }
     
    }
    catch(e)
    {
      console.error(e);
    }
  }

  registrar(){
    
    this.navCtrl.push('RegistrarPage');

  }

}
