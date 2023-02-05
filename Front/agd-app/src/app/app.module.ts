import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LogginComponent } from './components/loggin/loggin.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import { SplitButtonModule } from 'primeng/splitbutton';



import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {TableModule} from 'primeng/table';
import { RegistroServidorComponent } from './components/registro-servidor/registro-servidor.component';
import { ConsultaInventarioComponent } from './components/consulta-inventario/consulta-inventario.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { CambiaPasswordComponent } from './components/cambia-password/cambia-password.component';
import { ApplicativoComponent } from './components/cat/applicativo/applicativo.component';
import {ToolbarModule} from 'primeng/toolbar';
import { BaseConocomientoComponent } from './components/base-conocomiento/base-conocomiento.component';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LogginComponent,
    HeaderComponent,
    FooterComponent,
    DetalleComponent,
    MenuComponent,
    RegistroServidorComponent,
    ConsultaInventarioComponent,
    CambiaPasswordComponent,
    ApplicativoComponent,
    BaseConocomientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FieldsetModule,
    PanelModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    HttpClientModule,
    MessagesModule,
    MatButtonModule,
    MatMenuModule,
    TableModule,
    DynamicDialogModule,
    DialogModule,
    RippleModule,
    DropdownModule,
    InputSwitchModule,
    ConfirmDialogModule,
    SplitButtonModule,
    MenuModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
