import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../modules/auth/services/user.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent implements OnInit{
  @Output() buttonSidebarAction: EventEmitter<any> = new EventEmitter();
  status: boolean = false;
  isMaximized: boolean = false;
  persona: string = 'Usuario';

  @Input('sidebarStatusLarge')
  sidebarStatusLarge: boolean = false;
  sidebarOpen = false;
  menus: Array<any> = [];

  constructor(private router: Router, private authService: UserService) {}


  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit(): void {
    this.setMenuBasedOnUserType();
  }

  btnAction() {
    this.status = !this.status;
    this.buttonSidebarAction.emit(this.status);
  }

  maximizeAction() {
    this.isMaximized = !this.isMaximized;
    if (this.isMaximized) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  toggleSubMenu(menu: any): void {
    menu.open = !menu.open;
  }

  redirectToAuth(): void {
    this.authService.clearSession();
    this.router.navigate(['/auth']);
  }

  setMenuBasedOnUserType(): void {
    if (this.authService.isGuestMode()) {
      this.menus = [
        {
          link: '/home/i-alojamientos',
          name: 'Modo invitado',
          icon: 'fa-solid fa-hotel',
        }
      ];
    } else {
      const userRole = this.authService.getUserRole();

      if (userRole === '2') {
        this.menus = [
          {
            link: '/subscriptions',
            name: 'Mis Suscripciones',
            icon: 'fa-solid fa-bookmark',
          }
        ];
      } else {
        this.menus = [
          {
            link: '/home/',
            name: '¿Quienes somos?',
          },
          {
            link: '/home/alojamientos',
            name: 'Alojamientos',
          },
          {
            link: '/home/c-alojamientos',
            name: 'Registra tu alojamiento',
          }
        ];
      }
    }
  }

}
