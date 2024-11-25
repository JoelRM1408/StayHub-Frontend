import { ServicioService } from './../../services/servicio.service';
import { Component } from '@angular/core';
import { Alojamiento } from '../../../../shared/models/alojamiento.model';
import { ActivatedRoute } from '@angular/router';
import { AlojamientoService } from '../../services/alojamiento.service';
import { Servicio } from '../../../../shared/models/servicio.model';

@Component({
  selector: 'app-alojamiento-detalle',
  templateUrl: './alojamiento-detalle.component.html',
  styleUrl: './alojamiento-detalle.component.css'
})
export class AlojamientoDetalleComponent {
  alojamiento: Alojamiento | null = null;
  servicios: Servicio[] = [];

  constructor(
    private route: ActivatedRoute,
    private alojamientoService: AlojamientoService,
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alojamientoService.getAlojamientoById(id).subscribe({
      next: (data) => {
        this.alojamiento = data;
        console.log('Alojamiento cargados:', this.alojamiento);
      },
      error: (error) => {
        console.error('Error al cargar alojamientos:', error);
      },
    });
    this.servicioService.getAllServiciosByIdAloj(id).subscribe({
      next: (data) => {
        this.servicios = data;
        console.log('Servicios de Aloj cargados:', this.servicios);
      },
      error: (error) => {
        console.error('Error al cargar servicios:', error);
      },
    });
  }
}
