import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { RegistroServidorComponent } from './components/registro-servidor/registro-servidor.component';
import { ConsultaInventarioComponent } from './components/consulta-inventario/consulta-inventario.component';
import { CambiaPasswordComponent } from './components/cambia-password/cambia-password.component';
import { ApplicativoComponent } from './components/cat/applicativo/applicativo.component';
import { BaseConocomientoComponent } from './components/base-conocomiento/base-conocomiento.component';

const routes: Routes = [
  { path: '', component: LogginComponent},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'registroServidor', component: RegistroServidorComponent},
  {path: 'consultaInventario', component: ConsultaInventarioComponent},
  {path: 'cambiaPassword', component: CambiaPasswordComponent},
  {path: 'catAplicativo', component: ApplicativoComponent},
  {path: 'baseConocomiento', component: BaseConocomientoComponent},
];
const config: ExtraOptions = {
  useHash: true,
};


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
