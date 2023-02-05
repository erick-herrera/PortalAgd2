import { Component, OnChanges, OnInit } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { Settings } from '../../data/applicationData';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';  

   



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private router: Router) { }
  nombreUsuario='';
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {label: 'Cerrar Sesion', icon: 'pi pi-sign-out', command: () => {
          this.cerrarSesion();
      }},
      {label: 'Cambio Password', icon: 'pi pi-user-edit', command: () => {
          this.cambioPassword();
      }}
    ];

    if(Settings.datosUsuario==null){
      console.log('Settings null')
    }else{
      this.nombreUsuario='(' + Settings.datosUsuario.isUsr +')' + Settings.datosUsuario.nomUsr + ' ' 
        + Settings.datosUsuario.patUsr + ' ' 
        + Settings.datosUsuario.matUsr + ' ';
      
      
    }
  }
  cerrarSesion(){
    Settings.datosUsuario=null;
    this.router.navigateByUrl('/');
  }
  cambioPassword(){
    this.router.navigateByUrl('/cambiaPassword');

  }
  toRegistroServidor(){
    console.log('Entra a toRegistroServidor()');
    Settings.STATUS_PANT_REGISTRO_SERVIDOR=0;
    this.router.navigateByUrl('/registroServidor');
  }

}
