export interface RespPlatos {
  platos: Plato[];
}

export interface Plato {
  id_plato: number;
  desc: number;
  precio: number;
  estado: number;
  id_receta: number;
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
