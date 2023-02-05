import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Settings } from '../../data/applicationData';
import { Labels }   from '../../data/applicationMessage';
import { Aplicativo } from 'src/app/data/Inventario';
import { SelectItem } from 'primeng/api';
import { ServiceGralService } from '../../service/service-gral.service';
import { Message } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-base-conocomiento',
  templateUrl: './base-conocomiento.component.html',
  styleUrls: ['./base-conocomiento.component.css'],
  providers: [ConfirmationService]
})
export class BaseConocomientoComponent implements OnInit {
  
  constructor(private router: Router,
    private serviceGralService: ServiceGralService,
    private confirmationService: ConfirmationService) { }
  Labels : any;
  aplicativoSel : Aplicativo;
  itemsApps: SelectItem[];
  aplicativos: Aplicativo[];
  
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
    this.Labels = Labels;
    if(Settings.datosUsuario==null){
      this.router.navigateByUrl('');
    }
    this.cargaAplicativos();
  }
  selApp(){
    console.log('Cambio de apoplicativo: ' + this.aplicativoSel.descripcion);
  }
}
