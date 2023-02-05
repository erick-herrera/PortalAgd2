import { Component , OnDestroy, OnInit} from '@angular/core';
import { environment } from './../environments/environment';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private primengConfig: PrimeNGConfig) {}
  
  title = 'AGD-APP';
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    console.debug("SE INICA LA APLICACIÓN");
  }

  ngOnDestroy() {
    console.debug("SE DESTRUYE LA APLICACIÓN");
  }
}
