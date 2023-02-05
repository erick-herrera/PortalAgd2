import { Component, OnInit } from '@angular/core';
import { Settings } from '../../data/applicationData';
import {Router} from '@angular/router';
import {Message} from 'primeng//api';
import { ServiceGralService } from '../../service/service-gral.service';

@Component({
  selector: 'app-cambia-password',
  templateUrl: './cambia-password.component.html',
  styleUrls: ['./cambia-password.component.css']
})
export class CambiaPasswordComponent implements OnInit {

  constructor(private router: Router, private serviceGralService: ServiceGralService) { }
  nvoPassword : String;
  nvoPasswordRep : String;
  password: String;
  msgs: Message[] = [];

  ngOnInit(): void {
    if(Settings.datosUsuario==null){
      this.router.navigateByUrl('');
    }
  }

  validaCampos(){
    this.msgs = [];
    if(this.password==''){
      this.msgs.push({severity:'error', summary:'Mensaje de Error', detail:'Favor de digitar su Password actual'});
      return;
    }
    if(this.nvoPassword==''){
      this.msgs.push({severity:'error', summary:'Mensaje de Error', detail:'Favor de digitar su nuevo Password'});
      return;
    }
    if(this.nvoPasswordRep==''){
      this.msgs.push({severity:'error', summary:'Mensaje de Error', detail:'Favor de digitar la confirmación de su Password'});
      return;
    }
    if(this.nvoPassword != this.nvoPasswordRep){
      this.msgs.push({severity:'error', summary:'Mensaje de Error', detail:'La confirmación de su nuevo Password es incorrecta'});
      return;
    }
    this.serviceGralService.cambioPassword(Settings.datosUsuario.cveUsr, this.password, this.nvoPassword)
    .subscribe(resultado => {
      if(resultado.affectedRows){
        this.msgs=[{severity:'success', summary:'Operación terminada', detail:'La modificación de su password fue realizada con éxito'}];
        this.nvoPassword=null;
        this.nvoPasswordRep=null;
        this.password=null;
      }else{
        this.msgs=[{severity:'warning', summary:'Operación terminada', detail:resultado.description}];
      }
      
    });
  }

}
