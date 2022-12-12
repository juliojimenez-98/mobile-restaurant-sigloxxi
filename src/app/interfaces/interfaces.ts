export interface RespPlatos {
  platos: Plato[];
}

export interface RespBebestibles {
  bebestibles: Bebestible[];
}

export interface Bebestible {
  id_bebida?: number;
  nombre: string;
  precio: number;
  stock: number;
  stock_cri: number;
  unidad: string;
  fecha_vencimiento: string;
  img: string;
}
export interface Plato {
  id_plato: number;
  desc: number;
  precio: number;
  estado: number;
  img: string;
  id_receta: number;
  tipo_plato: number;
  receta: Receta;
  recetum?: Receta;
}

export interface Receta {
  id_receta?: number;
  nombre_prep: string;
  prep: string;
  tiempo_prep: number;
  id_ing?: number;
  tipo: number;
  ingredientes: Ingrediente[];
}

export interface Ingrediente {
  id_ing?: number;
  nombre: string;
  stock: number;
  stock_cri: number;
  unidad: string;
  fecha_vencimiento: Date;
}

export interface ReservasResponse {
  reservas: Reserva[];
}

export interface Reserva {
  id_reserva?: number;
  hora_reserva: string;
  cant_personas: number;
  fecha_reserva: string;
  id_cliente: number;
  id_mesa?: number;
  createdAt?: Date;
  updatedAt?: Date;
  cliente?: Cliente;
}

export interface Cliente {
  id_cliente?: number;
  nombre: string;
  appa: string;
  email: string;
  cel: number;
}

export interface CancelarReservaResponse {
  msg: string;
  cancelarReserva: number[];
}
