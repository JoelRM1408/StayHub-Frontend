import { ServicioService } from './../../services/servicio.service';
import { Component, HostListener } from '@angular/core';
import { AlojamientoService } from '../../services/alojamiento.service';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../../../shared/models/categoria.model';
import { Alojamiento } from '../../../../shared/models/alojamiento.model';
import { Servicio } from '../../../../shared/models/servicio.model';

@Component({
  selector: 'app-alojamiento-pages',
  templateUrl: './alojamiento-pages.component.html',
  styleUrl: './alojamiento-pages.component.css'
})
export class AlojamientoPagesComponent {
  alojamientos: Alojamiento[] = [];
  categorias: Categoria[] = [];
  servicios: Servicio[] = [];
  isModalVisible = false;
  constructor(
    private alojamientosService: AlojamientoService,
    private categoriaService: CategoriaService,
    private servicioService: ServicioService
  ) {}

  ngOnInit(): void {
    // this.alojamientosService.getAlojamientos().subscribe((data) => {
    //   this.alojamientos = this.filterUniqueAlojamientos(data);
    // });
    this.alojamientosService.getAllAlojamientos().subscribe({
      next:(data) => {
        this.alojamientos = data;
        console.log('Alojamientos cargados:', this.alojamientos);
      },
      error: (error) => {
        console.error('Error al cargar alojamientos:', error);
      },
    });

    this.categoriaService.getAllCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log('Categorías cargadas:', this.categorias);
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
      },
    });
    this.servicioService.getAllCategorias().subscribe({
      next: (data) => {
        this.servicios = data;
        console.log('Servicios cargadas:', this.servicios);
      },
      error: (error) => {
        console.error('Error al cargar servicios:', error);
      },
    });
  }

  // private filterUniqueAlojamientos(alojamientos: Alojamiento[]): Alojamiento[] {
  //   const uniqueAlojamientos = alojamientos.reduce((acc: Alojamiento[], alojamiento: Alojamiento) => {
  //     if (!acc.some((item) => item.alojamientoNombre === alojamiento.alojamientoNombre)) {
  //       acc.push(alojamiento);
  //     }
  //     return acc;
  //   }, []);
  //   return uniqueAlojamientos;
  // }
  onModalBackgroundClick(event: MouseEvent) {
    const modalContent = (event.target as HTMLElement).closest('.modal-content');
    if (!modalContent) {
      this.hideModal();
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    if (this.isModalVisible) {
      this.hideModal(); // Cierra el modal al hacer scroll
    }
  }

  showModal() {
    this.isModalVisible = true; // Muestra el modal
  }

  hideModal() {
    this.isModalVisible = false; // Oculta el modal
  }

  applyFilters() {
    console.log('Aplicar filtros seleccionados');
    this.hideModal(); // Oculta el modal después de aplicar
  }
}
