import { Component, OnInit } from '@angular/core';
import { Settings } from '../../../data/applicationData';
import { Labels } from '../../../data/applicationMessage';
import { Router } from '@angular/router';
import { Aplicativo } from 'src/app/data/Inventario';
import { SelectItem } from 'primeng/api';
import { ServiceGralService } from '../../../service/service-gral.service';
import { Message } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-applicativo',
  templateUrl: './applicativo.component.html',
  styleUrls: ['./applicativo.component.css'],
  providers: [ConfirmationService]
})
export class ApplicativoComponent implements OnInit {

  constructor(private router: Router,
    private serviceGralService: ServiceGralService,
    private confirmationService: ConfirmationService) { }
  Labels : any;
  titPantalla: string;
  statusPantalla: number; //0: sin operacion, 1: alta, 2: cambio
  editCampos: boolean;
  aplicativoSel : Aplicativo;
  nombre : string;
  descripcion : string;
  itemsApps: SelectItem[];
  aplicativos: Aplicativo[];
  msgs: Message[] = [];

  cargaAplicativos(){
    this.serviceGralService.consultaAplicativos()
    .subscribe(resultado => {
      if (resultado.outDesc) {
        Settings.TOKEN = null;
        this.router.navigateByUrl('');
      }
      this.aplicativos = resultado;
      this.itemsApps = new Array(this.aplicativos.length + 1);
      this.itemsApps[0] = { label: 'Selecciona Aplicativo', value: null };
      for (var i in this.aplicativos) {
        this.itemsApps[Number.parseInt(i) + 1] = ({ label: this.aplicativos[i].nombre + '-' + this.aplicativos[i].descripcion, value: this.aplicativos[i] });
      }
    });
  }
  ngOnInit(): void {
    this.Labels=Labels;
    this.titPantalla=Labels.TIT_PANT_CAT_APPS;
    this.statusPantalla=0;
    this.editCampos=false;
    if (Settings.datosUsuario == null) {
      this.router.navigateByUrl('');
      return;
    }
    this.cargaAplicativos();
  }
  alta(){
    this.aplicativoSel={clave: 0,
      nombre: '',
      descripcion: ''};
    this.titPantalla=Labels.TIT_PANT_CAT_APPS + " (" + Labels.BTN_ALTA + ")";
    this.statusPantalla=1;
    this.editCampos=true;
  }
  cambio(){
    this.titPantalla=Labels.TIT_PANT_CAT_APPS + " (" + Labels.BTN_CAMBIO + ")";
    this.editCampos=true;
    this.statusPantalla=2;
  }
  aceptar(){
    if (this.nombre == '') {
      this.msgs=[{ severity: 'error', summary: 'Error', detail: Labels.MSG_CAMPO_REQ+Labels.LBL_NOMBRE }];
      return;
    }
    if (this.descripcion == '') {
      this.msgs=[{ severity: 'error', summary: 'Error', detail: Labels.MSG_CAMPO_REQ+Labels.LBL_DESCRIPCION }];
      return;
    }
    switch(this.statusPantalla){
      case 1:
        this.serviceGralService.insertaAplicativos({clave: 0,
          nombre: this.nombre,
          descripcion:this.descripcion})
        .subscribe(resultado => {
            if (resultado.outDesc) {
              Settings.TOKEN = null;
              this.router.navigateByUrl('');
            }
            if (resultado.affectedRows > 0) {
              this.msgs = [{ severity: 'success', summary: 'Confirmado', detail: 'El registro se inserto correctamente.' }];
              this.nombre='';
              this.descripcion='';
            } else {
              this.msgs = [{ severity: 'info', summary: 'Confirmado', detail: 'Registro no insertado.' }];
            }
          });
        break;
      case 2:
        if(this.aplicativoSel==null){
          this.msgs = [{ severity: 'error', summary: 'Error', detail: Labels.MSG_CAMPO_REQ+Labels.LBL_CLAVE }];
          return;
        }
        this.serviceGralService.actualizaAplicativos(
            {clave: this.aplicativoSel.clave,
              nombre: this.nombre,
              descripcion:this.descripcion})
        .subscribe(resultado => {
            if (resultado.outDesc) {
              Settings.TOKEN = null;
              this.router.navigateByUrl('');
            }
            if (resultado.affectedRows > 0) {
              this.msgs = [{ severity: 'success', summary: 'Confirmado', detail: 'El registro se actualizo correctamente.' }];
              this.nombre='';
              this.descripcion='';
            } else {
              this.msgs = [{ severity: 'info', summary: 'Confirmado', detail: 'Registro no actualizado.' }];
            }
          });
        break;
    }
    this.cargaAplicativos();
    this.aplicativoSel=null;
  }
  cancelar(){
    this.titPantalla=Labels.TIT_PANT_CAT_APPS;
    this.statusPantalla=0;
    this.editCampos=false;
    this.aplicativoSel=null;
    this.nombre='';
    this.descripcion='';
    this.msgs = [];
  }
  selApp(){
    this.nombre=this.aplicativoSel.nombre;
    this.descripcion=this.aplicativoSel.descripcion
  }
  confirm() {
    this.msgs = [];
    this.confirmationService.confirm({
      message: '¿Esta seguro de proceder con: ' + this.titPantalla + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.aceptar();
      },
      reject: () => {

      }
    });

  }

}
