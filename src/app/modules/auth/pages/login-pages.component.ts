import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { AlojamientoService } from '../../alojamiento/services/alojamiento.service';
import { AuthResponse } from '../../../shared/models/AuthResponse.model';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css'
})
export class LoginPagesComponent implements OnInit{
  selectedTab = 'login';
  showPassword: boolean = false;

  selectTab(tab: string) {
    this.selectedTab = tab;
  }


  LoginForm: FormGroup = new FormGroup({});
  registerForm: FormGroup = new FormGroup({});
  isLogin: boolean = true;

  constructor(
    private authService: UserService,
    private router: Router,
    private alojamientoService: AlojamientoService
  ) {}


  ngOnInit(): void {
    this.initInputs();
  }

  public initInputs(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, this.noWhitespaceValidator]),
      password: new FormControl('', [Validators.required, this.noWhitespaceValidator])
    });
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      lastname: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      phone: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      email: new FormControl('', [Validators.required, Validators.email, this.noWhitespaceValidator]),
      password: new FormControl('', [Validators.required,Validators.minLength(6), this.noWhitespaceValidator])
    });
  }

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public login(): void {
    if (this.LoginForm.invalid) {
      console.warn('Formulario inválido');
      return;
    }

    const { email, password } = this.LoginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response:AuthResponse) => {
        console.log('Inicio de sesión exitoso:', response);

        localStorage.setItem('token', response.token);
        localStorage.setItem('roles', JSON.stringify(response.roles));
        if (response.iduser !== undefined && response.iduser !== null) {
          localStorage.setItem('iduser', response.iduser.toString());
        } else {
          console.error('El iduser es inválido:', response.iduser);
        }
        localStorage.setItem('email', response.email);

        this.router.navigate(['/home/alojamientos']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    });
  }

  public register(): void {
    if (this.registerForm.invalid) {
      console.warn('Formulario inválido');
      return
    }

    const user: User = {
      ...this.registerForm.value,
      actsubcription: false
    };

    this.authService.register(user).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
        this.registerForm.reset();
      },
      error: (error) => {
        console.error('Error de registro:', error);
      }
    });
  }

  showLogin(): void {
    this.isLogin = true;
  }

  showRegister(): void {
    this.isLogin = false;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


 // Método para ingresar en modo invitado
// login-pages.component.ts
  enterAsGuest(): void {
    // this.alojamientoService.getAlojamientosForGuest().subscribe({
    //   next: (alojamientos) => {
    //     console.log('Alojamientos para invitado:', alojamientos);
    //     // Redirige al componente de alojamientos para invitados y pasa los datos
    //     this.router.navigate(['/home/i-alojamientos'], { state: { alojamientos } });
    //   },
    //   error: (error) => {
    //     console.error('Error al cargar alojamientos para invitado:', error);
    //   }
    // });
  }
}
