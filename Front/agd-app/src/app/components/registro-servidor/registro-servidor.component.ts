import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Settings } from '../../data/applicationData';
import { Router } from '@angular/router';
import { Servidor, Aplicativo, Manejador } from 'src/app/data/Inventario';
import { PrimeNGConfig } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { ServiceGralService } from '../../service/service-gral.service';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';



@Component({
  selector: 'app-registro-servidor',
  templateUrl: './registro-servidor.component.html',
  styleUrls: ['./registro-servidor.component.css'],
  providers: [ConfirmationService]
})

export class RegistroServidorComponent implements OnInit {
  msgs: Message[] = [];
  servidor: Servidor;
  aplicativos: Aplicativo[];
  itemsApps: SelectItem[];
  manejadores: Manejador[];
  itemsDbms: SelectItem[];
  itemsAmbiente: SelectItem[];
  itemsSite: SelectItem[];
  salida: any;
  operacionOK = false;
  title = '';
  status = 0;
  editCampos = false;
  showBtnSave = false;
  showBtnModif = true;

  constructor(private router: Router,
    private primengConfig: PrimeNGConfig,
    private serviceGralService: ServiceGralService,
    private confirmationService: ConfirmationService) {
    this.servidor = Settings.servidor;
  }
  modificar() {
    this.editCampos = true;
    this.showBtnSave = true;
    this.showBtnModif = false;
  }
  cancelar() {
    this.editCampos = false;
    this.showBtnSave = false;
    this.showBtnModif = true;
    this.getServidor();
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if (Settings.datosUsuario == null) {
      this.router.navigateByUrl('');
      return;
    }
    this.status = Settings.STATUS_PANT_REGISTRO_SERVIDOR;
    switch (this.status) {
      case 0:
        this.title = 'Registro de Servidor';
        this.limpiar();
        this.editCampos = true;
        this.showBtnSave = true;
        this.showBtnModif = false;
        break;
      case 1:
        this.title = 'Actualización de Servidor';
        this.getServidor();
        this.editCampos = false;
        this.showBtnSave = false;
        this.showBtnModif = true;
        break;

    }
    this.servidor.idColaborador = Settings.datosUsuario.cveUsr;
    this.actualizaCatalogos();

    this.itemsAmbiente = [
      { label: 'Selecciona Ambiente', value: null },
      { label: 'DEV', value: 'DEV' },
      { label: 'QA', value: 'QA' },
      { label: 'UAT', value: 'UAT' },
      { label: 'PROD', value: 'PROD' }
    ];

    this.itemsSite = [
      { label: 'Selecciona Site', value: null },
      { label: 'IPCYT', value: 'IPCYT' },
      { label: 'KIO', value: 'KIO' }
    ];


  }
  actualizaCatalogos() {
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
          this.itemsApps[Number.parseInt(i) + 1] = ({ label: this.aplicativos[i].nombre + '-' + this.aplicativos[i].descripcion, value: this.aplicativos[i].clave });
        }
      });

    this.serviceGralService.consultaManejadores()
      .subscribe(resultado => {
        if (resultado.outDesc) {
          Settings.TOKEN = null;
          this.router.navigateByUrl('');
        }
        this.manejadores = resultado;
        this.itemsDbms = new Array(this.manejadores.length + 1);
        this.itemsDbms[0] = { label: 'Selecciona DBMS', value: null };
        for (var i in this.manejadores) {
          this.itemsDbms[Number.parseInt(i) + 1] = ({ label: this.manejadores[i].descripcion, value: this.manejadores[i].clave });
        }
      }
      );



  }
  save() {
    switch (this.status) {
      case 0:
        this.saveRegistro();
        break;
      case 1:
        this.saveActualizacion();
        break;
    }
  }
  saveRegistro() {
    this.msgs = [];
    if (this.camposOk()) {
      this.serviceGralService.insertaServidor(this.servidor)
        .subscribe(resultado => {
          if (resultado.outDesc) {
            Settings.TOKEN = null;
            this.router.navigateByUrl('');
          }
          this.salida = resultado;
          if (resultado.affectedRows > 0) {
            this.msgs = [{ severity: 'success', summary: 'Confirmado', detail: 'El registro se inserto correctamente.' }];
            //this.limpiar(); es mas conveniente mantener los datos en caso de que se den de  alta varios usuarios del mismo servidor
          } else {
            this.msgs = [{ severity: 'info', summary: 'Confirmado', detail: 'Registro no insertado.' }];
          }
        });
    }
  }
  saveActualizacion() {
    this.msgs = [];
    if (this.camposOk()) {
      this.serviceGralService.actualizaServidor(this.servidor)
        .subscribe(resultado => {
          if (resultado.outDesc) {
            Settings.TOKEN = null;
            this.router.navigateByUrl('');
          }
          this.salida = resultado;
          if (resultado.affectedRows > 0) {
            this.setServidor();
            this.msgs = [{ severity: 'success', summary: 'Confirmado', detail: 'El registro se actualizo correctamente.' }];
            this.limpiar();
          } else {
            this.msgs = [{ severity: 'info', summary: 'Confirmado', detail: 'El registro no sufrio modificaciones.' }];
          }
        });
    }
  }
  confirm() {
    this.confirmationService.confirm({
      message: '¿Esta seguro de proceder con: ' + this.title + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.save();
      },
      reject: () => {

      }
    });

  }
  camposOk() {

    let vReturn = true;

    if (this.servidor.idAplicativo == null) {
      this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Favor de seleccionar el aplicativo' });
      vReturn = false;
    }
    if (this.servidor.idDbms == null) {
      this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Favor de seleccionar el DBMS' });
      vReturn = false;
    }
    if (this.servidor.ambiente == null) {
      this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Favor de seleccionar el ambiente' });
      vReturn = false;
    }
    if (this.servidor.ip == '') {
      this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Favor de indicar la IP' });
      vReturn = false;
    }
    return vReturn;
  }

  limpiar() {
    this.servidor = {
      cveInventario: 0,
      idColaborador: Settings.datosUsuario.cveUsr,
      idAplicativo: null,
      desAplicativo: null,
      nomServidor: '',
      idDbms: null,
      nomDbms: null,
      verDbms: '',
      ambiente: null,
      ip: '',
      puerto: '',
      sid: '',
      esquema: '',
      bdUsuario: '',
      bdPassword: '',
      bdUsuarioTipo: '',
      soNombre: '',
      soUsuario: '',
      soPassword: '',
      observaciones: '',
      seRespalda: false,
      site: null
    };

  }
  getServidor() {
    this.servidor = {
      cveInventario: Settings.servidor.cveInventario,
      idColaborador: Settings.servidor.idColaborador,
      idAplicativo: Settings.servidor.idAplicativo,
      desAplicativo: Settings.servidor.desAplicativo,
      nomServidor: Settings.servidor.nomServidor,
      idDbms: Settings.servidor.idDbms,
      nomDbms: Settings.servidor.nomDbms,
      verDbms: Settings.servidor.verDbms,
      ambiente: Settings.servidor.ambiente,
      ip: Settings.servidor.ip,
      puerto: Settings.servidor.puerto,
      sid: Settings.servidor.sid,
      esquema: Settings.servidor.esquema,
      bdUsuario: Settings.servidor.bdUsuario,
      bdPassword: Settings.servidor.bdPassword,
      bdUsuarioTipo: Settings.servidor.bdUsuarioTipo,
      soNombre: Settings.servidor.soNombre,
      soUsuario: Settings.servidor.soUsuario,
      soPassword: Settings.servidor.soPassword,
      observaciones: Settings.servidor.observaciones,
      seRespalda: Settings.servidor.seRespalda,
      site: Settings.servidor.site
    };


  }

  setServidor() {

    Settings.servidor.cveInventario = this.servidor.cveInventario;
    Settings.servidor.idColaborador = this.servidor.idColaborador;
    Settings.servidor.idAplicativo = this.servidor.idAplicativo;
    Settings.servidor.desAplicativo = this.servidor.desAplicativo;
    Settings.servidor.nomServidor = this.servidor.nomServidor;
    Settings.servidor.idDbms = this.servidor.idDbms;
    Settings.servidor.nomDbms = this.servidor.nomDbms;
    Settings.servidor.verDbms = this.servidor.verDbms;
    Settings.servidor.ambiente = this.servidor.ambiente;
    Settings.servidor.ip = this.servidor.ip;
    Settings.servidor.puerto = this.servidor.puerto;
    Settings.servidor.sid = this.servidor.sid;
    Settings.servidor.esquema = this.servidor.esquema;
    Settings.servidor.bdUsuario = this.servidor.bdUsuario;
    Settings.servidor.bdPassword = this.servidor.bdPassword;
    Settings.servidor.bdUsuarioTipo = this.servidor.bdUsuarioTipo;
    Settings.servidor.soNombre = this.servidor.soNombre;
    Settings.servidor.soUsuario = this.servidor.soUsuario;
    Settings.servidor.soPassword = this.servidor.soPassword;
    Settings.servidor.observaciones = this.servidor.observaciones;
    Settings.servidor.seRespalda = this.servidor.seRespalda;
    Settings.servidor.site = this.servidor.site;



  }

}
