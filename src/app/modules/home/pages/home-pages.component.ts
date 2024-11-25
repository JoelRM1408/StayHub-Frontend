import { Component, OnInit } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css',
})
export class HomePagesComponent implements OnInit {
  sidebarStatusLarge:boolean=false;
  ngOnInit(): void{
  }
  getData(status:any){
  this.sidebarStatusLarge=status;
  }
}
