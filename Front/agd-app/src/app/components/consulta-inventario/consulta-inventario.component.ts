import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceGralService } from '../../service/service-gral.service';
import { Servidor } from 'src/app/data/Inventario';
import { Table } from 'primeng/table';
import { InputText } from 'primeng/inputtext';
import { DialogService } from 'primeng/dynamicdialog';
import { Settings } from '../../data/applicationData';
import {Router} from '@angular/router';
import { RegistroServidorComponent } from 'src/app/components/registro-servidor/registro-servidor.component';


@Component({
  selector: 'app-consulta-inventario',
  templateUrl: './consulta-inventario.component.html',
  styleUrls: ['./consulta-inventario.component.css'],
  providers: [DialogService]
})
export class ConsultaInventarioComponent implements OnInit {

  constructor(private dialogService: DialogService,
    private serviceGralService: ServiceGralService,
    private router: Router
    ) { }
  servidores: Servidor[];
  servidorSeleccionado: Servidor;
  loading: boolean = true;
  

  @ViewChild('dt') table: Table;
  f1='';
  f2='';
  f3='';
  f4='';
  f5='';
  f6='';
  f7='';
  f8='';

  ngOnInit(): void {
    if(Settings.datosUsuario==null){
      this.router.navigateByUrl('');
    }
    this.serviceGralService.consultaInventario()
    .subscribe(resultado => {
      if(resultado.outDesc){
        Settings.TOKEN = null;
        this.router.navigateByUrl('');
      }
      this.servidores = resultado;
      this.loading = false;
    });
  }
  limpiarFiltros(){
    this.table.clear();
    this.f1='';
    this.f2='';
    this.f3='';
    this.f4='';
    this.f5='';
    this.f6='';
    this.f7='';
    this.f8='';
    
  }
  
  onRowSelect(event) {
    Settings.servidor=this.servidorSeleccionado;
    Settings.STATUS_PANT_REGISTRO_SERVIDOR=1;
    const ref = this.dialogService.open(RegistroServidorComponent, {
      header: 'Servidor Seleccionado',
      width: '70%'
    });
    
  }


}
