import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Servidor } from 'src/app/data/Inventario';

export class Settings{
    static logged = false;
    static datosUsuario=null;
    static servidor : Servidor;
    static TOKEN=null;
    //ESTATUS MANEJADOS EN PANTALLA 0=REGISTRO, 1=MODIFICACION
    static STATUS_PANT_REGISTRO_SERVIDOR=0;

    
    isLogged(){
        return Settings.logged;
    }
    getDatosUsuario(){
        return Settings.datosUsuario;
    }
    
}