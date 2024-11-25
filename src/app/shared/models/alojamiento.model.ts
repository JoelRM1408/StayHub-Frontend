import { Categoria } from "./categoria.model";
import { Direccion } from "./direccion.model";
import { User } from "./user.model";

export interface Alojamiento {
  idalojamiento?: number;
  nombre: string;
  desc: string;
  precio: number;
  image1: string;
  image2: string;
  image3: string;
  user: User;
  categoria: Categoria;
  direccion: Direccion;
}
