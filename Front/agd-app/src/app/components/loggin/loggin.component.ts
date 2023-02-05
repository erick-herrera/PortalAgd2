import { Component, OnInit } from '@angular/core';
import { Settings } from '../../data/applicationData'
import { ServiceGralService } from '../../service/service-gral.service';
import {Router} from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {Message} from 'primeng//api';



@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  constructor(private router: Router,
    private serviceGralService: ServiceGralService) { }
  settings: Settings = new Settings();
  usuario='';
  password='';
  msgs: Message[] = [];
  descMsg='';

  ngOnInit(): void {
    this.autenticaApp();  
  }
  autenticaApp(){
    this.serviceGralService.autenticarApp().subscribe(salida=>{
      var token=salida.token;
      if(token){
        Settings.TOKEN=token;
      }
    });
  }

  loggin(){
    this.msgs = [];
    if(this.usuario==''){
      this.msgs.push({severity:'error', summary:'Mensaje de Error', detail:'Favor de digitar su usuario'});
      return;
    }
    if(this.password==''){
      this.msgs.push({severity:'error', summary:'Mensaje de Error', detail:'Favor de digitar su password'});
      return;
    }
    this.autenticaApp();
    this.serviceGralService.login(this.usuario,
      this.password).subscribe(
      resultado => {
        this.descMsg=resultado.outDesc;
        if(resultado.outCode==1){
          Settings.datosUsuario={
                cveUsr:resultado.outCveUsr,
                nomUsr:resultado.outNomUsr,
                patUsr:resultado.outPatUsr,
                matUsr:resultado.outMatUsr,
                isUsr:resultado.outIsUsr
            };
          
          this.router.navigateByUrl('/bienvenida');
        }else{
          this.msgs=[{severity:'error', summary:'Mensaje de Error', detail : resultado.outDesc }];
        }
      }
    );
    
    
  }
}
