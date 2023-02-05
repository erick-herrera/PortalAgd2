import { Component, OnInit } from '@angular/core';
import { Settings } from '../../data/applicationData';
import {Router} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    if(Settings.datosUsuario==null){
      this.router.navigateByUrl('');
    }
  }

}
