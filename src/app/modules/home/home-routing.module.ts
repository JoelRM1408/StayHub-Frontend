import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  // { path: 'perfil', component: PerfilPagesComponent },

  {

    path:'alojamientos',
    loadChildren: ()=> import('../alojamiento/alojamiento.module').then((e)=> e.AlojamientoModule)
  },
  // {

  //   path:'c-alojamientos',
  //   loadChildren: ()=> import('../alojamientos-create/alojamientos-create.module').then((e)=> e.AlojamientosCreateModule)
  // },
  // {

  //   path:'i-alojamientos',
  //   loadChildren: ()=> import('../alojamientos-invitado/alojamientos-invitado.module').then((e)=> e.AlojamientosInvitadoModule)
  // },
  // {

  //   path:'subscriCptions',
  //   loadChildren: ()=> import('../subscriptions/subscriptions.module').then((e)=> e.SubscriptionsModule)
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
