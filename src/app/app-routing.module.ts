import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((e) => e.AuthModule)
  },
  {
    path: '',
    component: HomePagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>import('./modules/home/home.module').then((m) => m.HomeModule)
      },
    ]
  },
  // {
  //   path: 'subscriptions',
  //   loadChildren: () => import('./modules/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
  // },

  // {
  //   path: 'alojamientos-create',
  //   loadChildren: () => import('./modules/alojamientos-create/alojamientos-create.module').then(m => m.AlojamientosCreateModule)
  // },

  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
