import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlojamientoPagesComponent } from './pages/alojamiento-pages/alojamiento-pages.component';
import { AlojamientoRoutingModule } from './alojamiento-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AlojamientoDetalleComponent } from './pages/alojamiento-detalle/alojamiento-detalle.component';



@NgModule({
  declarations: [
    AlojamientoPagesComponent,
    AlojamientoDetalleComponent
  ],
  imports: [
    CommonModule,
    AlojamientoRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
})
export class AlojamientoModule { }
