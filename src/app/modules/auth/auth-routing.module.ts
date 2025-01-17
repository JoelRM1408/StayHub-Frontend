import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages.component';

const routes: Routes = [

  {
    path: 'login',
    component:LoginPagesComponent

  },
  {
    path: '**',
    redirectTo:'login'
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
