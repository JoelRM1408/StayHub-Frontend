import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlojamientoPagesComponent } from './pages/alojamiento-pages/alojamiento-pages.component';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientoDetalleComponent } from './pages/alojamiento-detalle/alojamiento-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: AlojamientoPagesComponent
  },
  {
    path: 'detalle/:id',
    component:AlojamientoDetalleComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlojamientoRoutingModule { }
