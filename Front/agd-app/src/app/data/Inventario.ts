/**
* Interface utilizada para obtener información del inventario de aplicaciones
*/
export interface Servidor {
    cveInventario: number;
    idColaborador: string;
    idAplicativo:string;
    desAplicativo: string;
    nomServidor: string;
    nomDbms: string;
    idDbms: string;
    verDbms: string;
    ambiente: string;
    ip: string;
    puerto: string;
    sid: string;	
    esquema: string;	
    bdUsuario: string;	
    bdPassword: string;
    bdUsuarioTipo: string;	
    soNombre: string;
    soUsuario: string;
    soPassword: string;	
    observaciones: string;
    seRespalda: boolean;
    site: string;
  }


/**
* Interface utilizada para obtener información del catálogo de aplicativos
*/
export interface Aplicativo {
  clave: number;
  nombre: string;
  descripcion: string;
}

/**
* Interface utilizada para obtener información del catálogo de DBMS
*/
export interface Manejador {
  clave: number;
  descripcion: string;
}