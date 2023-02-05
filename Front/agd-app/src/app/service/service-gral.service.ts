import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Servidor,Aplicativo } from 'src/app/data/Inventario';
import { Settings } from '../data/applicationData';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceGralService {

  constructor(private httpClient: HttpClient) { }
  
  autenticarApp(): Observable<any>{
    const credenciales = {usuario: environment.USER_TKEN_USR, contrasena: environment.USER_TKEN_PWS};
    return this.httpClient.post<any>(environment.apiUrl+'autenticar',credenciales);
  }
  login(username: string, password: string): Observable<any>{
    const credenciales = {userName: username, password: password};
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'login',credenciales, { headers });
  }
  cambioPassword(cveUsuario: String, password: String, passwordNvo: String): Observable<any>{
    const credenciales = {cveUsuario: cveUsuario, password: password, passwordNvo: passwordNvo};
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'cambioPassword',credenciales, { headers });
  }
  consultaInventario(): Observable<any>{
    const credenciales = {};
    const headers = new HttpHeaders()
            .set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'consultaInventario',credenciales,{headers});
  }

  consultaAplicativos(): Observable<any>{
    const credenciales = {};
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'consultaAplicativos',credenciales,{headers});
  }

  insertaAplicativos(aplicativo: Aplicativo): Observable<any>{
    const credenciales = aplicativo;
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'insertaAplicativo',credenciales,{headers});
  }
  actualizaAplicativos(aplicativo: Aplicativo): Observable<any>{
    const credenciales = aplicativo;
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'actualizaAplicativo',credenciales,{headers});
  }

  consultaManejadores(): Observable<any>{
    const credenciales = {};
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'consultaManejadores',credenciales,{headers});
  }

  insertaServidor(servidor: Servidor): Observable<any>{
    const credenciales = {idColaborador: servidor.idColaborador,
      cveAplicativo: servidor.idAplicativo,
      nomServidor: servidor.nomServidor,
      cveDbms:servidor.idDbms,
      verDbms: servidor.verDbms,
      ambiente: servidor.ambiente,
      ip: servidor.ip,
      puerto:servidor.puerto,
      sid: servidor.sid,
      esquema: servidor.esquema,
      bdUsuario: servidor.bdUsuario,
      bdPassword: servidor.bdPassword,
      bdUsuarioTipo: servidor.bdUsuarioTipo,	
      soNombre: servidor.soNombre,
      soUsuario: servidor.soUsuario,
      soPassword: servidor.soPassword,
      observaciones: servidor.observaciones,
      seRespalda:servidor.seRespalda,
      site: servidor.site
    };
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'insertaServidor',servidor,{headers});
  }

  actualizaServidor(servidor: Servidor): Observable<any>{
    const credenciales = {
      cveInventario: servidor.cveInventario,
      idColaborador: servidor.idColaborador,
      cveAplicativo: servidor.idAplicativo,
      nomServidor: servidor.nomServidor,
      cveDbms:servidor.idDbms,
      verDbms: servidor.verDbms,
      ambiente: servidor.ambiente,
      ip: servidor.ip,
      puerto:servidor.puerto,
      sid: servidor.sid,
      esquema: servidor.esquema,
      bdUsuario: servidor.bdUsuario,
      bdPassword: servidor.bdPassword,
      bdUsuarioTipo: servidor.bdUsuarioTipo,	
      soNombre: servidor.soNombre,
      soUsuario: servidor.soUsuario,
      soPassword: servidor.soPassword,
      observaciones: servidor.observaciones,
      seRespalda:servidor.seRespalda,
      site: servidor.site};
    const headers = new HttpHeaders().set("access-token", Settings.TOKEN);
    return this.httpClient.post<any>(environment.apiUrl+'actualizaServidor',servidor,{headers});
  }
}
