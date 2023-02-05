import { Component, OnInit , ViewChild } from '@angular/core';
import { ServiceGralService } from '../../service/service-gral.service';
import { Servidor } from 'src/app/data/Inventario';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private serviceGralService: ServiceGralService) { }
  servidores : Servidor[];
  servidorSeleccionado : Servidor;
  loading: boolean = true;

  @ViewChild('dt') table: Table;

  actualizaInventario(){
    this.serviceGralService.consultaInventario()
    .subscribe(resultado => this.servidores=resultado);
    console.log(this.servidores.length);
  }

  ngOnInit(): void {
    this.serviceGralService.consultaInventario()
    .subscribe(resultado => {
      this.servidores=resultado;
      this.loading = false;
    });   
  }

  onConsultorChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
        const idColaborador = value;

        this.table.filter(idColaborador, 'idColaborador', 'eq');
        
    }
}
  

}
